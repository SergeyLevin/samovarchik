import fs from "node:fs/promises";
import path from "node:path";
import fg from "fast-glob";
import sharp from "sharp";

const ROOT = process.cwd();
const SRC_DIR = path.join(ROOT, "public", "images-src");
const OUT_DIR = path.join(ROOT, "public", "images");
const AVIF_OPTIONS = { quality: 45, effort: 6 }; // скорость/качество для продакшена
const WEBP_OPTIONS = { quality: 75, effort: 5 }; // хорошая компрессия без мыла

function pickWidths(meta) {
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;

  // hero/баннеры (широкие)
  const isWide = w >= 1200 && w > h;

  // квадратные карточки меню
  const isSquare = w > 0 && w === h;

  if (isWide) return [640, 960, 1280, 1536];
  if (isSquare) return [256, 384, 512, 768, 1024];

  // универсально
  return [320, 480, 768, 1024, 1280];
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  await ensureDir(SRC_DIR);
  await ensureDir(OUT_DIR);

  const patterns = ["**/*.{png,jpg,jpeg,webp}"];
  const files = await fg(patterns, { cwd: SRC_DIR, onlyFiles: true });

  if (files.length === 0) {
    console.log(`Нет файлов в ${SRC_DIR}. Сначала перенеси исходники туда.`);
    process.exit(0);
  }

  const report = [];

  for (const rel of files) {
    const srcPath = path.join(SRC_DIR, rel);
    const parsed = path.parse(rel);
    const baseName = parsed.name; // без расширения
    const outBase = path.join(OUT_DIR, baseName);

    const img = sharp(srcPath, { failOn: "none" });
    const meta = await img.metadata();

    const widths = pickWidths(meta).filter((x) => (meta.width ? x <= meta.width : true));

    // 1) Генерим размеры AVIF+WebP
    for (const w of widths) {
      const avifPath = `${outBase}-${w}.avif`;
      const webpPath = `${outBase}-${w}.webp`;

      await img
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .avif(AVIF_OPTIONS)
        .toFile(avifPath);

      await img
        .clone()
        .resize({ width: w, withoutEnlargement: true })
        .webp(WEBP_OPTIONS)
        .toFile(webpPath);
    }

    // 2) Фолбэк: base.webp (чтобы старые ссылки /images/name.webp не сломались)
    // Берём самый большой сгенерированный webp и копируем в base.webp
    const maxW = Math.max(...widths);
    const biggestWebp = `${outBase}-${maxW}.webp`;
    const fallbackWebp = `${outBase}.webp`;

    if (await fileExists(biggestWebp)) {
      const buf = await fs.readFile(biggestWebp);
      await fs.writeFile(fallbackWebp, buf);
    }

    report.push({
      file: rel,
      width: meta.width,
      height: meta.height,
      generatedWidths: widths,
      out: `/images/${baseName}.webp`,
    });

    console.log(`✓ ${rel} → ${widths.length * 2 + 1} файлов (avif/webp + fallback)`);
  }

  await fs.writeFile(path.join(ROOT, "tools", "images.report.json"), JSON.stringify(report, null, 2), "utf-8");
  console.log(`\nГотово. Отчет: tools/images.report.json`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
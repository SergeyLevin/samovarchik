import { LucideIcon } from "lucide-react";

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  image?: string;
  category?: string;
}

export interface Promotion {
  title: string;
  description: string;
  details: string;
  cta: string;
}

export interface Branch {
  address: string;
  hours: string;
  phone: string;
  mapLink: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: LucideIcon;
}
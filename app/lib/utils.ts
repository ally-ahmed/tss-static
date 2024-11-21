import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin;
  if (import.meta.env.VITE_APP_BASE_URL)
    return `https://${import.meta.env.VITE_APP_BASE_URL}`;
  return `http://localhost:${process.env.PORT ?? 3000}`;
}

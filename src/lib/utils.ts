import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// src/lib/theme.ts
export function setDarkMode(enable: boolean) {
  const root = document.documentElement; // <html>
  root.classList.toggle("dark", enable);
  localStorage.setItem("theme", enable ? "dark" : "light");
}

export function initTheme() {
  const saved = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  setDarkMode(saved ? saved === "dark" : prefersDark);
}

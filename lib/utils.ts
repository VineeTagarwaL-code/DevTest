import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function delay(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}



export function generateRandomCode(): string {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let code = "";
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      code += alphabet[randomIndex];
    }
    if (i !== 2) {
      code += "-";
    }
  }
  return code;
}


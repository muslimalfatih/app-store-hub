import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// clsx + stock tailwind-merge: Fluid Functionalism's typeClass() output is
// written and tested against tailwind-merge's merging rules.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

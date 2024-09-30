import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export { defu as merge } from 'defu'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

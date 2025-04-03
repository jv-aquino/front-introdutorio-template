import { twMerge } from "tailwind-merge";
import clsx from 'clsx';
// uma utilidadezinha pra usar classes condicionalmente e dar um merge de classes conflitantes
// ex: base classe tem bg-white mas o user passou bg-black
// para evitar mais texto, fica só o bg-black
export function mergeClasses(baseClasses: string, className?: string) {
  return twMerge(clsx(baseClasses, className))
}
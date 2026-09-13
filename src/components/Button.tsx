import { type ComponentPropsWithoutRef } from "react"
import { cn } from "../lib/utils"


export default function Button({ className, children, ...rest }: ComponentPropsWithoutRef<"button">) {
  return (
    <button className={cn(
      "px-4 py-2 border-2 shadow-[2px_2px_0_0_black] select-none transition-all duration-100",
      "hover:shadow-[5px_5px_0_0_rgba(0,0,0,1)] hover:-translate-y-0.5 hover:-translate-x-0.5",
      "active:shadow-[2px_2px_0_0_black] active:translate-0",
      className
    )} {...rest}>
      {children}
    </button>
  )
}
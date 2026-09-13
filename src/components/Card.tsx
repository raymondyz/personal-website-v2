import { type ComponentPropsWithoutRef } from "react"

import { cn } from "../lib/utils"

interface CardProps extends ComponentPropsWithoutRef<"div"> {
  clickable?: boolean
}

export default function Card({ clickable, children, className, ...rest }: CardProps) {
  return (
    <div className={cn(
      "p-4 border-4 shadow-[4px_4px_0_0_black] transition-all duration-100 active:shadow-[4px_4px_0_0_black] active:translate-0",
      clickable && "hover:shadow-[10px_10px_0_0_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1",
      className
    )} {...rest}>
      {children}
    </div>
  )
}
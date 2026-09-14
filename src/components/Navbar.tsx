import { NavLink, type NavLinkProps } from "react-router"
import { buttonStyles } from "./ui/Button"
import { cn } from "../lib/utils"

function NavbarLink({ className, ...rest }: NavLinkProps) {
  return (
    <NavLink className={({isActive}) => cn(buttonStyles, "bg-amber-50", isActive && "bg-amber-200", className)} {...rest} />
  )
}


export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 flex justify-center gap-6 p-4 pb-6 z-10">
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/projects">Projects</NavbarLink>
    </nav>
  )
}
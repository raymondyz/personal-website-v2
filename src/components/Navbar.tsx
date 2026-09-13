import { NavLink, type NavLinkProps } from "react-router"

import { cn } from "../lib/utils"

function NavbarLink({ className, ...rest }: NavLinkProps) {
  return (
    <NavLink {...rest} className={({isActive}) => cn("hover:underline", isActive && "underline", className)} />
  )
}

export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 flex justify-center gap-6 p-4 z-10">
      <NavbarLink to="/">Home</NavbarLink>
      <NavbarLink to="/projects">Projects</NavbarLink>
      <NavbarLink to="/shjkfdshfjkhsjdkf">Not Found</NavbarLink>
    </nav>
  )
}
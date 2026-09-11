import { NavLink } from "react-router"

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">projects</NavLink>
      <NavLink to="/fhsdfhwekf">Not Found</NavLink>
    </nav>
  )
}
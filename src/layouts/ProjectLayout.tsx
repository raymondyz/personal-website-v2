import { Link, Outlet } from "react-router";
import { buttonStyles} from "../components/ui/Button";
import { cn } from "../lib/utils";


export default function ProjectLayout() {
  return (
    <div className="h-dvh relative">
      <Outlet />
      <Link className={cn(buttonStyles, "absolute top-0 left-0 m-4")} to="/projects">Projects</Link>
    </div>
  )
}
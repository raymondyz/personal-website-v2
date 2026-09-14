import { Outlet } from "react-router"
import Navbar from "../components/Navbar"
import { cn } from "../lib/utils"

const backgroundGridStyles = `bg-white bg-size-[48px_48px] bg-position-[12px_12px]
  bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)]`

export default function SiteLayout() {
  return (
    <div className="min-h-dvh flex flex-col font-bold">
      <div className={cn("fixed inset-0 -z-1", backgroundGridStyles)} />
      <Navbar />
      <Outlet />
    </div>
  )
}
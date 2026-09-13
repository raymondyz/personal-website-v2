import { Routes, Route, Outlet } from "react-router"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"

import { cn } from "./lib/utils"

const backgroundGridStyles = `bg-white bg-size-[48px_48px] bg-position-[12px_12px]
  bg-[linear-gradient(to_right,#80808040_1px,transparent_1px),linear-gradient(to_bottom,#80808040_1px,transparent_1px)]`

function Layout() {
  return (
    <div className="min-h-dvh flex flex-col font-bold">
      <div className={cn("fixed inset-0 -z-1", backgroundGridStyles)} />
      <Navbar />
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App

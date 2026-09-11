import { Routes, Route, Outlet } from "react-router"

import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import Navbar from "./components/Navbar"


function Layout() {
  return (
    <div className="min-h-dvh">
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

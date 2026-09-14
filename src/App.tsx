import { Routes, Route } from "react-router"

import SiteLayout from "./layouts/SiteLayout"
import ProjectLayout from "./layouts/ProjectLayout"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Projects from "./pages/Projects"
import MorseType from "morsetype"

function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<ProjectLayout />}>
        <Route path="projects/morsetype" element={<MorseType />}/>
      </Route>
    </Routes>
  )
}

export default App

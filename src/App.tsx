import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ThreeDWorld from "./pages/ThreeDWorld"
import ContactPage from "./pages/ContactPage"
import ProjectsPage from "./pages/ProjectsPage"
import Game from "./pages/Game"
import Page404 from "./pages/Page404"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
        <Route path="/3D" element={<ThreeDWorld/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
        <Route path="/game/*" element={<Game/>}/>
        <Route path="/*" element={<Page404/>}/>
      </Routes>
    </>
  )
}

export default App

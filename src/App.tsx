import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </>
  )
}

export default App

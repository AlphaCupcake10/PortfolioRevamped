import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ThreeDWorld from "./pages/ThreeDWorld"
import ContactPage from "./pages/ContactPage"
import MyWorkPage from "./pages/MyWorkPage"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/mywork" element={<MyWorkPage/>}/>
        <Route path="/3D" element={<ThreeDWorld/>}/>
        <Route path="/contact" element={<ContactPage/>}/>
      </Routes>
    </>
  )
}

export default App

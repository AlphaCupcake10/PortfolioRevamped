import { Route, Routes } from "react-router"
import HomePage from "./pages/HomePage"
import ThreeDWorld from "./pages/ThreeDWorld"
import ContactPage from "./pages/ContactPage"
import ProjectsPage from "./pages/ProjectsPage"
import Game from "./pages/Game"
import Page404 from "./pages/Page404"
import Stats from "./pages/Stats"

import { registerSW } from "virtual:pwa-register";
import { useModal } from "./contexts/ModalContext";
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

  const modal = useModal();

  const updateSW = registerSW({
    onNeedRefresh() {
      modal?.CreateModal("New content available", "Please refresh to get the latest content","Refresh","Cancel").then((res) => {
        if (res) {
          updateSW(true);
        }
      }
      );
    },
  });


  return (
    <>
      {/* <Analytics/> */}
      {/* <SpeedInsights/> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/3D" element={<ThreeDWorld />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/game/*" element={<Game />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
    </>
  )
}

export default App

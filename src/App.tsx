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
import { useEffect, useState } from "react"
// import { Analytics } from "@vercel/analytics/react"
// import { SpeedInsights } from "@vercel/speed-insights/react"

function App() {

    const modal = useModal();

    const updateSW = registerSW({
        onNeedRefresh() {
            modal?.CreateModal("New content available", "Please refresh to get the latest content", "Refresh", "Cancel").then((res) => {
                if (res) {
                    updateSW(true);
                }
            }
            );
        },
    });

    const { isLoading, progress } = usePageLoadWaiter();

    if (isLoading) {
        return <div>
            {progress}
        </div>
    }


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

// Alternative: Simpler version that just waits for page load
export const usePageLoadWaiter = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleLoad = () => {
            setProgress(100);
            setIsLoading(false);
        };

        const handleProgress = () => {
            // Simulate progress based on document ready state
            if (document.readyState === 'loading') {
                setProgress(33);
            } else if (document.readyState === 'interactive') {
                setProgress(66);
            } else if (document.readyState === 'complete') {
                setProgress(100);
                setIsLoading(false);
            }
        };

        // Check if already loaded
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            // Listen for load events
            window.addEventListener('load', handleLoad);
            document.addEventListener('readystatechange', handleProgress);

            // Initial progress check
            handleProgress();
        }

        return () => {
            window.removeEventListener('load', handleLoad);
            document.removeEventListener('readystatechange', handleProgress);
        };
    }, []);

    return { isLoading, progress };
};

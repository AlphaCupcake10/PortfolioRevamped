import { Route, Routes } from "react-router";
import LandingPage from "../components/GamePage/LandingPage";
import WebGLPlayer from "../components/GamePage/WebGLPlayer";
import Page404 from "./Page404";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import LeaderboardPage from "../components/GamePage/LeaderboardPage";
import { useEffect } from "react";

export default function Game()
{
    useEffect(()=>{
        document.title = 'Abyssal Descent';

        return () => {
            document.title = 'AlphaCupcake10';
        }
    },[])
    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
            <Routes>
                <Route path="/" element={<LandingPage/>}/>
                <Route path="/play" element={<WebGLPlayer/>}/>
                <Route path="/leaderboard" element={<LeaderboardPage/>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </>
    )
}
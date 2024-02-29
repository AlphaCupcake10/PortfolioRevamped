import { Route, Routes } from "react-router";
import LandingPage from "../components/GamePage/LandingPage";
import Navbar from "../components/Navbar";
import WebGLPlayer from "../components/GamePage/WebGLPlayer";
import Page404 from "./Page404";

export default function Game()
{
    

    return (
        <>
            
            <Routes>
                <Route path="/" element={<><Navbar /><LandingPage/></>}/>
                <Route path="/play" element={<WebGLPlayer/>}/>
                <Route path="/signup" element={<><Navbar margin/><h1 className="container mx-auto">SIGNUP PAGE HERE</h1></>}/>
                <Route path="/*" element={<Page404/>}/>
            </Routes>
        </>
    )
}
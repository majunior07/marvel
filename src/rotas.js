import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom/cjs/react-router-dom";
import Home from "./pages";
import { BrowserRouter } from "react-router-dom";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
            </Routes>
        </BrowserRouter>
                

    );
}

export default Rotas;
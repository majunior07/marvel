import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages";
import CardHerois from "./components/CardHerois";

function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<CardHerois />} />
            </Routes>
        </BrowserRouter>
                

    );
}

export default Rotas;
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../Components/Header/header";
import TransicaoPaginas from "../anim/TransicaoPaginas";
import PaginaLivros from "../pages/Biblioteca/PaginaLivros";
import PaginaInicial from "../pages/PaginaInicial/PaginaInicial";
const RotaPrincipal: React.FC = () => {
    return (
        <BrowserRouter>
           <Header/>
           <TransicaoPaginas>
            <Routes>
                <Route path="/" element={<PaginaInicial />} />
                <Route path="/Livros" element={<PaginaLivros />} />
            </Routes>
            </TransicaoPaginas>
        </BrowserRouter>
    );
}

export default RotaPrincipal;

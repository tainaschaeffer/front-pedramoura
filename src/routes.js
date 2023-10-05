import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup/Signup";
import App from "./App";
import Produto from "./components/Produto";
import Venda from "./components/Venda";
import ListaProdutos from "./components/ListaProdutos";
import ListaVendas from "./components/ListaVendas";
import { useUserAuth } from "./context/userAuthContext";

function Rotas() {

    const { user } = useUserAuth();

    console.log(user);

    if(!user){
        return (
            <Routes>
                <Route path="/*" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/vendas" element={<Venda />} />
            <Route path="/produtos" element={<Produto />} />
            <Route path="/lista-produto" element={<ListaProdutos />} />
            <Route path="/lista-venda" element={<ListaVendas />} />
        </Routes>
    );
}

export default Rotas;
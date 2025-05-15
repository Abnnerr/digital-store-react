import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Comprar from "../pages/Comprar";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route  path="/" element={<Home/>}/>
                <Route  path="/produtos" element={<Produtos/>}/>
                <Route  path="/produtos/comprar" element={<Comprar />}/>
                {/* <Route  path="/produtos/comprar/finalizarcompra" element={}/> */}
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;
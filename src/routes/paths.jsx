import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Produtos from "../pages/Produtos";
import Comprar from "../pages/Comprar";
import NotFound from "../pages/NotFound";
import PageLayout from "../layouts/PageLayout";

const Paths = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route path="/produtos" element={<Produtos />} />
                    <Route path="/produtos/comprar" element={<Comprar />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Paths;
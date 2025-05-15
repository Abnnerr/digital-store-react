import FooterProdutos from "../components/FooterProd";
import Header from "../components/HeaderProd";
import SectionProdutos from "../components/MainProd";
// import '../produtos.css'
const Produtos = () => {
    return (
        <>
            <Header/>
            <main>
                <SectionProdutos />
            </main>
            <FooterProdutos />
        </>
    );
}

export default Produtos;
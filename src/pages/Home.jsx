import SectionBanner from "../components/Banner";
import SectionDestaques from "../components/Destaques";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Oferta from "../components/oferta";
import Produtos from "../components/produtos";

const Home = () => {
    return (
        <>
            <Header />
            <main>
                <SectionBanner />
                <SectionDestaques />
                <Produtos/>
                <Oferta />
            </main>
            <Footer />
        </>
    );
}

export default Home;
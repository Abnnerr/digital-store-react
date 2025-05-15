import SectionBanner from "../components/Banner";
import SectionDestaques from "../components/Destaques";
import Oferta from "../components/oferta";
import Produtos from "../components/produtos";

const Home = () => {
    return (
        <main>
            <SectionBanner />
            <SectionDestaques />
            <Produtos />
            <Oferta />
        </main>
    );
}

export default Home;
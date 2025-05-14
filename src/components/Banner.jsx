import tenisbanner from '../assets/tenisbanner.png'
const SectionBanner = () => {
    return (
        <section className="conteiner_banner">
            <div className="banner">
                <div className="slide">
                    <img src={tenisbanner}alt=""/>
                        <div className="text_banner">
                            <h5>Melhores Ofertas Personalizado</h5>
                            <h1>Queima de Stoque Nike</h1>
                            <p>Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure
                                consectetur.</p>
                            <a href="" className="btn">Ver Ofertas</a>
                        </div>
                </div>
            </div>
        </section>
    );
}

export default SectionBanner;
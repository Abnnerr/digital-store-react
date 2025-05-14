import layer from '../assets/laye 1.png'
const Oferta = () => {
    return (
        <section className="conteiner_oferta">
            <div className="oferta_especial">
                <div className="oferta">
                    <div className="imagem_oferta">
                        <div></div>
                        <img src={layer} alt=""/>
                    </div>
                    <div className="texto_oferta_conteiner">
                        <div className="texto_oferta">
                            <h5>Oferta Especial</h5>
                            <h1>Air Jordan edição de colecionador</h1>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto esse officia,
                                quibusdam
                                hic neque reprehenderit, commodi iste tenetur expedita magni possimus fuga. Nam numquam
                                vero
                                quaerat nostrum officiis, eveniet in?</p>
                            <a href="" className="btn">Ver Ofertas</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Oferta;
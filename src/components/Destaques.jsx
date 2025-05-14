import camisa from '../assets/camisa.png';
import pants from '../assets/pants.png';
import headphone from '../assets/headphone.png'
import headphones from '../assets/headphones.png'
import teniss from '../assets/tenis_imagem.png'
import tenis from '../assets/tenis.png'
const SectionDestaques = () => {
    return (
        <section className="conteiner_destaques">
            <div className="destaques">
                <h4 className="titulo">Coleções em Destaque</h4>
                <div className="desta_list">
                    <div className="dest1">
                        <img src={camisa} alt="" />
                        <div className="texto_promo">
                            <div>
                                <h6>30% OFF</h6>
                            </div>
                            <h4>Novo Drop Supreme</h4>
                            <a href="" className="btn">comprar</a>
                        </div>
                    </div>
                    <div className="dest1">
                        <img src={teniss} alt="" />
                        <div className="texto_promo">
                            <div>
                                <h6>30%OFF</h6>
                            </div>
                            <h4>Coleção Supreme</h4>
                            <a href="" className="btn">comprar</a>
                        </div>
                    </div>
                    <div className="dest1">
                        <img src={headphone} alt="" />
                        <div className="texto_promo">
                            <div>
                                <h6>30%OFF</h6>
                            </div>
                            <h4>Novo Beats Bass</h4>
                            <a href="" className="btn">comprar</a>
                        </div>
                    </div>

                </div>
                <div className="conteiner_destaques_logo">
                    <div className="destaques_logo">
                        <h3>Coleções em Destaque</h3>
                        <div className="list_destaques_logo">
                            <div>
                                <img src={pants} alt="" />
                                <h4>Camisetas</h4>
                            </div>
                            <div>
                                <img src={pants} alt="" />
                                <h4>calças</h4>
                            </div>
                            <div>
                                <img src={pants} alt="" />
                                <h4>bones</h4>
                            </div>
                            <div>
                                <img src={headphones} alt="" />
                                <h4>Headphones</h4>
                            </div>
                            <div>
                                <img src={tenis} alt="" />
                                <h4>Tenis</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionDestaques;
import sapato from '../assets/sapato.png'
const SectionProdutos = () => {
    return (
        <section id="produtos_lista">
            <div className="conteiner_lista_produtos">
                <div className="resultado_filtro">
                    <div className="result">
                        <h4>Resultado para Tênis</h4>
                        <h5>- 389 produtos</h5>
                    </div>
                    <div className="ordenar">
                        <label for="">
                            <h4>ordenar por:</h4>
                        </label>
                        <select name="" id="">
                            <option value="">Mais Relevantes</option>
                        </select>
                    </div>
                </div>
                <div className="filtro_produtos">
                    <div className="filtro">
                        <h4>Filtrar por</h4>
                        <hr/>
                            <ul className="marca">
                                <h5>Marka</h5>
                                <li><input type="checkbox" name="" id=""/> Adidas </li>
                                <li><input type="checkbox" name="" id=""/> Calenciaga </li>
                                <li><input type="checkbox" name="" id=""/> K-Swiss </li>
                                <li><input type="checkbox" name="" id=""/> Nike</li>
                                <li><input type="checkbox" name="" id=""/> Puma </li>
                            </ul>
                            <ul className="categoria">
                                <h5>Categoria</h5>
                                <li><input type="checkbox" name="" id=""/> Adidas </li>
                                <li><input type="checkbox" name="" id=""/> Calenciaga </li>
                                <li><input type="checkbox" name="" id=""/> K-Swiss </li>
                                <li><input type="checkbox" name="" id=""/> Nike</li>
                                <li><input type="checkbox" name="" id=""/> Puma </li>
                            </ul>
                            <ul className="genero">
                                <h5>Genero</h5>
                                <li><input type="checkbox" name="" id=""/> Masculino</li>
                                <li><input type="checkbox" name="" id=""/> Feminino</li>
                                <li><input type="checkbox" name="" id=""/> UniSex</li>
                            </ul>
                            <ul className="estado">
                                <h5>Estado</h5>
                                <li><input type="radio" name="" id=""/>Novo</li>
                                <li><input type="radio" name="" id=""/> Usado</li>
                            </ul>
                    </div>
                    <div className="lista_produtos">
                        <div className="cards">
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="card">
                                <a href="/produtos/comprar">
                                    <div className="imagem_card">
                                        <img src={sapato} alt=""/>
                                            <h6>30% OFF</h6>
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionProdutos;
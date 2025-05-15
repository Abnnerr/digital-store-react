const SectionComprar = () => {
    return (
        <section id="produtos">
            <div className="conteiner_produtos">
                <div className="conteiner_carrinho">
                    <div className="carrinho">
                        <div className="text_top">
                            <div className="text">
                                <h5>MEU CARRINHO</h5>
                                <div>
                                    <h5>QUANTIDADE</h5>
                                    <h5>UNITARIO</h5>
                                    <h5>TOTAL</h5>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="conteiner_produtos_info">
                            <div className="produto_info">
                                <div className="produto">
                                    <div className="imagem_produto">
                                        <img src="imgs/sapato.png" alt="" />
                                    </div>
                                    <div className="text_produto">
                                        <h4>Tênis Nike Revolution 6 Next
                                            Nature Masculino</h4>
                                        <p>Cor: <strong>Vermelhor/Branco</strong></p>
                                        <p>Tamanho: <strong>42</strong></p>
                                    </div>
                                </div>
                            </div>
                            <div className="conteiner_valores">
                                <div className="quantidade">
                                    <div className="quantidade_buttons">
                                        <button>-</button>
                                        <h5>1</h5>
                                        <button>+</button>
                                    </div>
                                    <div className="remover_item">
                                        <a href="">Remover Item</a>
                                    </div>
                                </div>
                                <div className="unitario">
                                    <del>R$ 219,00</del>
                                    <p>R$ 219,00</p>
                                </div>
                                <div className="total">
                                    <del>R$ 219,00</del>
                                    <p>R$ 219,00</p>
                                </div>
                            </div>

                        </div>
                        <hr/>
                            <div className="conteiner_cupom_frete">
                                <div className="cupom">
                                    <h5>Cupom de Desconto</h5>
                                    <div>
                                        <input type="text" placeholder="Ensira seu Codigo" />
                                        <button>OK</button>
                                    </div>
                                </div>
                                <div className="frete">
                                    <h5>Calcular Frete</h5>
                                    <div>
                                        <input type="text" placeholder="Ensira seu Cep" />
                                        <button>OK</button>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className="resumo">
                        <div className="text_resumo">
                            <h5>RESUMO</h5>
                        </div>
                        <hr />
                        <div className="info_desconto_frete">
                            <div>
                                <h5>Subtotal:</h5>
                                <h4>R$ 219,00</h4>
                            </div>
                            <div>
                                <h5>Frete:</h5>
                                <h4>R$ 219,00</h4>
                            </div>
                            <div>
                                <h5>Desconto:</h5>
                                <h4>R$ 30,00</h4>
                            </div>
                        </div>
                        <div className="total">
                            <div>
                                <h3>Total</h3>
                                <div>
                                    <h3>R$ 219,00</h3>
                                    <h5>ou 10x de R$ 21,00 sem juros</h5>
                                </div>
                            </div>
                            <div>
                                <a href="finalizar.html">Continuar</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="conteiner_produtos_relacionados">
                    <div className="produtos_relacionados">
                        <div className="titulo_produtos_relacionado">
                            <h3>Produtos Relacionados</h3>
                            <a href="">Ver todos</a>
                        </div>
                        <div className="relacionados">
                            <a href="">
                                <div className="card_relacionados">
                                    <div className="imagem_card">
                                        <h6>30% OFF</h6>
                                        <img src="/imgs/sapato.png" alt="" />
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="card_relacionados">
                                    <div className="imagem_card">
                                        <h6>30% OFF</h6>
                                        <img src="/imgs/sapato.png" alt="" />
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="card_relacionados">
                                    <div className="imagem_card">
                                        <h6>30% OFF</h6>
                                        <img src="/imgs/sapato.png" alt="" />
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </div>
                            </a>
                            <a href="">
                                <div className="card_relacionados">
                                    <div className="imagem_card">
                                        <h6>30% OFF</h6>
                                        <img src="/imgs/sapato.png" alt="" />
                                    </div>
                                    <div className="text_card">
                                        <h6>tenis</h6>
                                        <p>K-Swiss V8 - Masculino</p>
                                        <h5><del>$200</del>$100</h5>
                                    </div>
                                </div>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionComprar;
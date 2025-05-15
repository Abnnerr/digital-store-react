import logo from '../assets/logo.png'
const FooterProdutos = () => {
    return ( 
            <footer id="conteiner_bottom">
                <div className="conteiner_rodape">
                    <div className="rodape">
                        <div className="logo_rodape">
                            <div className="logoo">
                                <a href="#conteiner_top">
                                    <img src={logo} alt="" />
                                    <h3>Digital Store</h3>
                                </a>
                            </div>
                            <div className="logo_text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, expedita quam accusamus
                                    recusandae nulla reprehenderit, quis itaque praesentium quisquam voluptatem ab odio,
                                    asperiores
                                    eligendi. Eveniet earum facere repudiandae facilis incidunt.</p>
                                <div>
                                    <a href=""><box-icon name='facebook' type='logo' color='#ffffff'
                                        className="icon"></box-icon></a>
                                    <a href=""><box-icon name='instagram' type='logo' color='#ffffff'
                                        className="icon"></box-icon></a>
                                    <a href=""><box-icon name='twitter' type='logo' color='#ffffff' className="icon"></box-icon></a>
                                </div>
                            </div>
                        </div>
                        <div className="info">
                            <div className="informac">
                                <h4>Informações</h4>
                                <a href="">Sobre Drip Store</a>
                                <a href="">Segurança</a>
                                <a href="">Whilist</a>
                                <a href="">Blog</a>
                                <a href="">Trabalhe Conosco</a>
                                <a href="">Meus Pedidos</a>
                            </div>
                            <div className="categorias">
                                <h4>Categorias</h4>
                                <a href="">Camisetas</a>
                                <a href="">Calças</a>
                                <a href="">Bones</a>
                                <a href="">Headphones</a>
                                <a href="">Tenis</a>
                            </div>
                            <div className="contato">
                                <h4>Contato</h4>
                                <p>Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161</p>
                                <a href="">(85) 3051-3411</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className="marca">
                        <p>&copy; Digital Collage</p>
                    </div>
                </div>

            </footer>
        );
    }

    export default FooterProdutos;
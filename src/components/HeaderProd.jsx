import buy from '../assets/Buy.png'
import logo from '../assets/logo.png'
const Header = () => {
    return (
        <header>
            <div id="conteiner_top">
                <div id="logo">
                    <img src={logo} alt="Digital Store Logo" />
                    <h1>Digital Store</h1>
                </div>
                <div className="pesq">
                    <input type="text" placeholder="Pesquisar Produto..." id="pesqui" />
                    <a href="#pesqui"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <div className="acoes">
                    <a href="" className="cadastro">Cadastre-se</a>
                    <button>Entrar</button>
                    <a href="" className="carrinho">
                        <img src={buy} alt="" />
                        <span>2</span>
                    </a>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li className="active"><a href="/produtos">Produtos</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/pedidos">Meus Pedidos</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
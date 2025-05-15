import logo from "../assets/logo.png";
import buy from "../assets/buy.png";
const Header = () => {
    return (
        <header>
            <div className="conteiner_top">
                <div className="logo">
                    <img src={logo} alt="Digital Store Logo" />
                    <h1>Digital Store</h1>
                </div>
                <div className="pesq">
                    <input type="text" placeholder="Pesquisar Produto..." className="pesqui" />
                    <a href="#pesqui"><i className="fa-solid fa-magnifying-glass"></i></a>
                </div>
                <div className="acoes">
                    <a href="" className="cadastro">Cadastre-se</a>
                    <button><a href="login.html">Entrar</a></button>
                    <a href="" className="carrinho">
                        <img src={buy} alt="" />
                        <span>2</span>
                    </a>
                </div>
            </div>
            <nav>
                <ul>
                    <li className="active" onclick="active()"><a href="/">Home</a></li>
                    <li><a href="/produtos">Produtos</a></li>
                    <li><a href="/categorias">Categorias</a></li>
                    <li><a href="/meus-pedidos">Meus Pedidos</a></li>
                </ul>
            </nav>
        </header>
    );
}
export default Header;
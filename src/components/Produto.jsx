import sapato from "../assets/sapato.png"
const Produto = () => {



    
    return (
        <div className="card">
            <a href="/produtos/comprar">
                <div className="imagem_card">
                    <h6>30% OFF</h6>
                    <img src={sapato} alt="" />
                </div>
                <div className="text_card">
                    <h6>tenis</h6>
                    <p>K-Swiss V8 - Masculino</p>
                    <h5><del>$200</del>$100</h5>
                </div>
            </a>
        </div>
    );
}

export default Produto;
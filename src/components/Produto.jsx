import sapato from "../assets/sapato.png"
const Produto = ({nome,categoria,marca,preco,genero,estado,desconto,id}) => {
    return (
        <div className="card" id="">
            <a href="/produtos/comprar">
                <div className="imagem_card">
                    <h6>{
                        desconto > 0
                        }%</h6>
                    <img src={sapato} alt="" />
                </div>
                <div className="text_card">
                    <h6>{marca}</h6>
                    <p>{nome} - {genero}</p>
                    <h5><del>{desconto}</del>{preco}</h5>
                </div>
            </a>
        </div>
    );
}

export default Produto;
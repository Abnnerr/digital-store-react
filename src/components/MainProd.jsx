import { useState } from 'react';
import sapato from '../assets/sapato.png'
import Produto from './Produto';
import { AXIOS } from '../services';
const SectionProdutos = () => {
    const [filtroMarca, setFiltroMarca] = useState([]);
    const [filtroCategoria, setFiltroCategoria] = useState([]);
    const [filtroGenero, setFiltroGenero] = useState([]);
    const [filtroEstado, setFiltroEstado] = useState("Novo");
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    async function buscarProdutos() {
        try {
            const response = await AXIOS.get("/produtos");
            setProdutos(response.data);
            setProdutosFiltrados(response.data);
        } catch (error) {
            alert(error.message);
        }
    }

    function verificarMarca(marca) {
        if (filtroMarca.includes(marca)) {
            setFiltroMarca([...filtroMarca.filter(cadaMarca => cadaMarca != marca)]);
            return;
        }
        setFiltroMarca([...filtroMarca, marca]);
    }

    function verificarCategoria(categoria) {
        if (filtroCategoria.includes(categoria)) {
            setFiltroCategoria([...filtroCategoria.filter(cadaCategoria => cadaCategoria != categoria)]);
            return;
        }
        setFiltroCategoria([...filtroCategoria, categoria]);
    }

    function verificarGenero(genero) {
        if (filtroGenero.includes(genero)) {
            setFiltroGenero([...filtroGenero.filter(cadaGenero => cadaGenero != genero)]);
            return;
        }
        setFiltroGenero([...filtroGenero, genero]);
    }

    useEffect(() => {
        buscarProdutos();
    }, []);

    useEffect(() => {
        if (filtroMarca.length > 0) {
            setProdutosFiltrados([...produtos.filter(produto => filtroMarca.includes(produto.marca))])
            return;
        }
        setProdutosFiltrados([...produtos]);
    }, [filtroMarca])

    return (
        <section id="produtos_lista">
            <div className="conteiner_lista_produtos">
                <div className="resultado_filtro">
                    <div className="result">
                        <h4>Resultado para Tênis</h4>
                        <h5>- 389 produtos</h5>
                    </div>
                    <div className="ordenar">
                        <label>
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
                        <hr />
                        <ul className="marca">
                            <h5>Marka</h5>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarMarca('Adidas')} /> Adidas </li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarMarca('Calenciaga')} /> Calenciaga </li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarMarca('K-Swiss')} /> K-Swiss </li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarMarca('Nike')} /> Nike</li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarMarca('Puma')} /> Puma </li>
                        </ul>
                        <ul className="categoria">
                            <h5>Categoria</h5>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarCategoria('Esporte e Lazer')}/>Esporte e Lazer </li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarCategoria('Casual')}/>Casual</li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarCategoria('Utilitario')}/>Utilitario</li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarCategoria('Corrida')}/>Corrida</li>
                        </ul>
                        <ul className="genero">
                            <h5>Genero</h5>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarGenero('Masculino')} /> Masculino</li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarGenero('Feminino')} /> Feminino</li>
                            <li><input type="checkbox" name="" id="" onChange={() => verificarGenero('UniSex')} /> UniSex</li>
                        </ul>
                        <ul className="estado">
                            <h5>Estado</h5>
                            <li><input type="radio" name="" id="" checked={filtroEstado == 'Novo'} onChange={() => setFiltroEstado('Novo')} />Novo</li>
                            <li><input type="radio" name="" id="" checked={filtroEstado == 'Usado'} onChange={() => setFiltroEstado('Usado')} /> Usado</li>
                        </ul>
                    </div>
                    <div className="lista_produtos">
                        <div className="cards">
                            {
                                produtosFiltrados.length > 0 && produtosFiltrados.map(produto => (
                                    <Produto
                                        {...produto}
                                    />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionProdutos;
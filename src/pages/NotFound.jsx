import { Link } from "react-router";

const NotFound = () => {
    return (
        <>
            <h1>Erro ao encontrar pagina</h1>
            <Link to={-1}>Voltar</Link>
        </>
    );
}

export default NotFound;
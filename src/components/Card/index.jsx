import { Link } from "react-router-dom";

export const Card = ({ curso }) => {
  return (
    <Link to={`/detalhes/${curso.id}`}>
      <div key={curso.id}>
        <h2>Nome: {curso.nome}</h2>
        <p>Turno: {curso.turno}</p>
        <p>Duração: {curso.duracao}</p>
        <p>Data de Início: {curso.data_inicio}</p>
      </div>
    </Link>
  );
};

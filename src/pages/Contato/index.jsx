import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contato = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  function checarEnvio(e) {
    e.preventDefault();
    if (nome && email && mensagem) {
      navigate("/resultado", { state: { nome, email, mensagem } });
    } else {
      setError("ò u doido, digita todos os campos man.");
    }
  }
  return (
    <>
      <h1>Contato</h1>
      <form onSubmit={checarEnvio}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu Nome"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-Mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensagem">Mensagem</label>
          <br />
          <textarea
            name="mensagem"
            id="mensagem"
            cols={28}
            rows={4}
            onChange={(e) => setMensagem(e.target.value)}
          ></textarea>
        </div>
        <button>Enviar</button>
        {error && <p>{error}</p>}
      </form>
    </>
  );
};

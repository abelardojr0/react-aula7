import { Card } from "../../components/Card";
import { lista_de_cursos } from "../../utils/lista_cursos";

export const Cursos = () => {
  return (
    <>
      <h1>Cursos</h1>
      <section>
        {lista_de_cursos &&
          lista_de_cursos.map((element) => <Card curso={element} />)}
      </section>
    </>
  );
};

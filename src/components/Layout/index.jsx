import { Link, Outlet } from "react-router-dom";
import { LayoutCabecalho } from "./style";

export const Layout = () => {
  return (
    <>
      <LayoutCabecalho>
        <nav>
          <LayoutCabecalho>
            <li>
              <Link to={"/"}>Início</Link>
            </li>
            <li>
              <Link to={"/sobre"}>Sobre</Link>
            </li>
            <li>
              <Link to={"/contato"}>Contato</Link>
            </li>
            <li>
              <Link to={"/cursos"}>Cursos</Link>
            </li>
          </LayoutCabecalho>
        </nav>
      </LayoutCabecalho>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Direitos reservados e os carai</p>
      </footer>
    </>
  );
};

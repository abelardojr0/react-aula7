import styled from "styled-components";
const agora = 19;

export const CursoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const CursoTitulo = styled.h2`
  color: ${agora >= 18 ? "green" : "red"};
`;

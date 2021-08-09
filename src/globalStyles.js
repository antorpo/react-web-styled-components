import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    // Utilizamos el selector universal
    * {
        /* 
            Esto hace que el tamano de las cajas no aumente por el border y padding,
            sino que estos ocupen el contenido para siempre saber cuanto with ocupa
            nuestros elementos.
        */
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;

export const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-right: 50px;
  padding-left: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;

export default GlobalStyle;

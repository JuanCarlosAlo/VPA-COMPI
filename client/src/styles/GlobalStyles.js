import { createGlobalStyle } from 'styled-components';
import { COLORS, SECONDARY_COLORS } from '../constants/colors';

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  img{
    display: block;
    max-width: 100%;
  }
  body{
    margin: 0;
    font-family: sans-serif;
    height: 100vh;
    width: 100vw;
    background:  ${SECONDARY_COLORS.BACKGROUND_GRADIANT};
    /* url('/images/bg_squares.png'), */
    background-size: auto;
    background-position: center;
    background-repeat: no-repeat;
    color: ${COLORS.MAIN};
  }
  a{
    text-decoration: none;
    color: inherit;
  }
  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }
  
/* Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #E6122B #FFFFFF;
}

/* Chrome, Edge and Safari */
*::-webkit-scrollbar {
  width: 10px;
}
*::-webkit-scrollbar-track {
  border-radius: 5px;
  background-color: #FFFFFF;
  border: 1px solid #000000;
}

*::-webkit-scrollbar-track:hover {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-track:active {
  background-color: #FFFFFF;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background-color: #E6122B;
  border: 1px solid #000000;
}

*::-webkit-scrollbar-thumb:hover {
  background-color: #01D3E2;
}

*::-webkit-scrollbar-thumb:active {
  background-color: #01D3E2;
}

`;

export { GlobalStyles };

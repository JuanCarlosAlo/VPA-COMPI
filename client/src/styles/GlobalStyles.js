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
  
`;

export { GlobalStyles };

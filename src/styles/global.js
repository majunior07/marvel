import { createGlobalStyle} from 'styled-components';
import logo from '../img/marvel.jpeg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, body, #root {
    background: url(${logo}) no-repeat center center/cover ;
    width: 100vw; // ** vw
    height: 100vh; // ** vh
    margin: 0 auto;
}


`;
import { createGlobalStyle} from 'styled-components';
import logo from '../img/marvel.jpeg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, body, #root {
    //background-color: red;
    //min-height: 100%;
    background: url(${logo}) no-repeat center center/cover;
    height: 100vh;

}

`;
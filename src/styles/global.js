import { createGlobalStyle} from 'styled-components';
import background from '../img/ironMan.jpg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, body, #root {
    //min-height: 100%;
    background-image: url('../img/ironMan.jpg');
    height: 100vh;
    color: #fff;

}
/*
body{
    //background: #c30707;
}
*/

`;
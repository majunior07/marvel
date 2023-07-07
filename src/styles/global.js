import { createGlobalStyle} from 'styled-components';
import image from '../img/imageIron.jpg';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}


html, body, #root {
    //min-height: 100%;
    background: #000 url(${image}) no-repeat center center/cover;
    height: 100%;
    color: #fff;

}
/*
body{
    //background: #c30707;
}
*/

`;
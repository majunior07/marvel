import styled from 'styled-components';


export const Container = styled.div`
    //background: red;
    margin: 0 auto;
    width: 100vw; // ** vw
    height: 100vh; // ** vh
    //padding: 0 20px;
    justify-content: space-between;
    display: grid;
    grid-gap: 5px;

    grid-template-areas: 
    'header header header'
    'sidebar content content'
    'footer footer footer';

    //grid-template-columns: repeat(4, 1fr);

    //grid-template-rows: 1fr 1fr 1fr 1fr;
    
    //Alinhamento Horizontal
    //justify-content: center;
    

    //align-items: center;
    // Alinhamento Vertical

    @media only screen and (max-width: 820px) {
        grid-template-areas: 
            'header'
            'sidebar'
            'content'
            'footer';

        grid-template-columns: 1fr;

        grid-template-rows: 1fr;
    }

    
`;

export const Header = styled.div`
    border: 5px solid blue;
    padding: 20px;
    
    grid-area: header;
    

    height: 15vh;
    //background-color: black;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        color: #FF0000;
        //margin-right: 40px;
        width: 350px;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;

        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid;
        //font-family: monospace;
        font-size: 3em;
    }

    @keyframes typing {
        from {
            width: 0;
        }        
    }

    @keyframes blink {
         50% {
            border-color: transparent;
        }
        
    }


    input{
        outline: none;
        background: none;
        border: none;
        //margin-left: 2rem;
        width: 350px;
        height: 35px;
        border-radius: 1rem;
        color: red;
        font-size: 20px;
        padding: 1.2rem;
        border: 2px solid #B41F23;
    }
`;

export const Sidebar = styled.div`
    //background: white;
    color: #fff;
    border: 5px solid yellow;
    //padding: 0px;
    grid-area: sidebar;

    height: 70vh;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    
    
`;

export const Titulo = styled.h1`
    margin-top: 13px;
    margin-bottom: 13px;
    font-size: 38px;

    @media only screen and (max-width: 820px) {
        font-size: 30px;
    }
`;


export const Lista = styled.h1`
    font-size: 22px;

    @media only screen and (max-width: 820px) {
        font-size: 15px;
    }
`;
 


export const Content = styled.div`
    //background: white;
    border: 5px solid green;
    padding: 20px;

    grid-area: content;

    height: 70vh;
`;

export const Footer = styled.div`
    //background: white;
    border: 3px solid purple;
    padding: 20px;

    grid-area: footer;
    
    height: 15vh;
`;

export const DivCard = styled.div`
        color: #FF0000;
        font-size: 14px;
        display: block;
        padding: 1px;
`;

export const CardHeroi = styled.div`
   background-color: #fff;
   height: 100%;
   width: 100%;
   color: black;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Esquerda = styled.div`
   height: 100%;
   width: 60%;
   display: flex;
   align-items: center;
   justify-content: center;

   img{
    width: 97%;
    height: 97%;
   }
`;

export const Direita = styled.div`
    height: 100%;
    width: 40%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Loader = styled.div`
    //border: 3px solid blue;
    //background-color: black;
    margin-left: 550px;
    margin-top: 50px;

    img{
        width: 200px;
    }

    

    



`;


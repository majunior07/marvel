import styled from 'styled-components';


export const Container = styled.div`
    //background: red;
    margin: 0 auto;
    width: 100vw; // ** vw
    height: 100vh; // ** vh
    padding: 0 20px;
    justify-content: space-between;

    display: grid;
    grid-gap: 5px;
    grid-template-areas: 
    'header header header'
    'sidebar content content'
    'footer footer footer';

    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: auto auto auto;


    @media only screen and (max-width: 820px) {

        //max-width: 70%;
        //max-height: 70%;
        grid-template-areas: 
            'header'
            'sidebar'
            'content'
            'footer';

        grid-template-columns: auto;

        grid-template-rows: auto;
    }

    
`;

export const Header = styled.div`
    border: 5px solid blue;   
    grid-area: header;
    height: 20vh;
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
    color: #fff;
    border: 5px solid yellow; 
    grid-area: sidebar;
    height: 50vh;
    display: flex;
    align-items: start;
    justify-content: start;
    flex-direction: column;
    
    
`;




export const Titulo = styled.h1`
    //margin-top: 13px;
    //margin-bottom: 10px;
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
    border: 5px solid green;
    grid-area: content;
    height: 50vh;
`;

export const Footer = styled.div`
    border: 3px solid purple;
    grid-area: footer;
    height: 20vh;
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


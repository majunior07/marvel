import styled from 'styled-components';


export const Container = styled.div`
    //background: red;

    padding: 20px;
    display: grid;
    gap: 5px;
    grid-template-areas: 
    'header header header header'
    'sidebar content content content'
    'footer footer footer footer';
    
    //Alinhamento Horizontal
    //justify-content: center;
    

    //align-items: center;
    // Alinhamento Vertical
    
`;

export const Header = styled.div`
    //border: 1px solid blue;
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
    //border: 1px solid blue;
    padding: 20px;
    grid-area: sidebar;
    height: 70vh;
    display: flex;
    align-items: ;
    justify-content: start;
    flex-direction: column;
    
`;

export const Content = styled.div`
    //background: white;
    //border: 1px solid blue;
    padding: 20px;
    grid-area: content;
    height: 70vh;
`;

export const Footer = styled.div`
    //background: white;
    //border: 1px solid blue;
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
   border: 3px solid blue;
   background-color: #fff;
   color: black;
   display: flex;
   align-items: center;
   justify-content: center;
`;

export const Esquerda = styled.div`
   border: 3px solid blue;
   width: 60%;
`;

export const Direita = styled.div`
    border: 3px solid blue;
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
`;
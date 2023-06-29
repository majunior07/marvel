import styled from 'styled-components';

export const Container = styled.div`
    background: red;
    border: 3px solid red;
    padding: 20px;
    display: grid;
    gap: 5px;
    grid-template-areas: 
    'header header header'
    'sidebar content content'
    'footer footer footer';
    
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
    background-color: black;
    display: flex;
    align-items: center;
    justify-content: center;

    h1{
        color: white;
        margin-right: 40px;
    }


    input{
        outline: none;
        background: none;
        border: none;
        //margin-left: 2rem;
        width: 350px;
        height: 35px;
        border-radius: 1rem;
        color: white;
        font-size: 20px;
        padding: 1.2rem;
        border: 2px solid #B41F23;
    }
`;

export const Sidebar = styled.div`
    background: white;
    border: 1px solid blue;
    padding: 20px;
    grid-area: sidebar;
    height: 70vh;
`;

export const Content = styled.div`
background: white;
    border: 1px solid blue;
    padding: 20px;
    grid-area: content;
    height: 70vh;
`;

export const Footer = styled.div`
    background: white;
    border: 1px solid blue;
    padding: 20px;
    grid-area: footer;
    height: 15vh;
`;
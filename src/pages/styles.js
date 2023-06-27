import styled from 'styled-components';

export const Container = styled.div`
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
    border: 1px solid blue;
    padding: 20px;
    grid-area: header;
    height: 15vh;
`;

export const Sidebar = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: sidebar;
    height: 70vh;
`;

export const Content = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: content;
    height: 70vh;
`;

export const Footer = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: footer;
    height: 15vh;
`;
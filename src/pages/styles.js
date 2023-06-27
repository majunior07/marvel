import styled from 'styled-components';

export const Container = styled.div`
    border: 3px solid red;
    padding: 20px;
    display: grid;
    gap: 5px;
    grid-template-areas: 
    'header header header header'
    'sidebar content content content'
    'footer footer footer footer';
`;

export const Header = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: header;
`;

export const Sidebar = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: sidebar;
`;

export const Content = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: content;
`;

export const Footer = styled.div`
    border: 1px solid blue;
    padding: 20px;
    grid-area: footer;
`;
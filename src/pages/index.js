import React from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';

function Home(){
    return(
        <Container id='template-areas'>
            <Header id='header'>
                <h1>Cabelhaço</h1>
            </Header>
            
            <Sidebar id='sidebar'>
                <h1>Sidebar</h1>
            </Sidebar>

            <Content id='content'>
                <h1>Conteúdo</h1>
            </Content>

            <Footer id='footer'>
                <h1>Rodapé</h1>
            </Footer>

        </Container>
       
    )
}

export default Home;
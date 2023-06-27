import React, { useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import { useState } from 'react';

const [heroi, setHeroi] = useState({});

function Home(){

    async function hash(){
        await api.get(``)
        .then((response) => {
            console.log(response.data);
            setHeroi(response.data);
        })
        .catch(error => console.log(error));
    }



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
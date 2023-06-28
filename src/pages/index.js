import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import api from '../services/api';
import axios from 'axios';


function Home(){

    const [heroi, setHeroi] = useState([]);

        useEffect(() => {
        
            api.get(`/characters`)            
            .then((response) => {
                console.log('primeiro log', response.data);
                setHeroi(response);

            })
            .catch(error => console.log(error));

        }, []);

        
    
    return(
        <Container id='template-areas'>
            <Header id='header'>
                <h1>Cabelhaço</h1>
            </Header>
            
            <Sidebar id='sidebar'>
                <h1>Lista de Heróis</h1>
                <ul>
                    
                </ul>

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
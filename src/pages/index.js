import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import api from '../services/api';
import axios from 'axios';
import Cards from '../components/Cards';


function Home(){

    const [herois, setHerois] = useState([]);

        useEffect(() => {
        
            api.get(`characters`)            
            .then((response) => {
                console.log('primeiro log', response.data);
                setHerois(response.data.data.results);

            })
            .catch(error => console.log(error));

        }, []);

        
    
    return(
        <Container id='template-areas'>
            <Header id='header'>
                <h1>MARVAL 2023</h1>
                <input type='search' placeholder='Search Here' />
            </Header>
            
            <Sidebar id='sidebar'>
                <h1>Lista de Heróis</h1>
                <ul>
                   {herois.map(heroi =>{
                    return(
                        <li>
                            <span>{heroi.name}</span>
                        </li>
                    )
                   })}                      
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
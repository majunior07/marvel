import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import api from '../services/api';
import axios from 'axios';
import Card from '../components/Card';



function Home(){

    const [herois, setHerois] = useState();

    const [url, setUrl] = useState(api);

        useEffect(() => {

            const fetch = async() => {

            const response = await api.get(`characters`)            
            .then((response) => {
                console.log('primeiro log', response.data);
                setHerois(response.data.data.results);

            })
            .catch(error => console.log(error));

            }
            
            fetch();

        }, [api]);

        
    
    return(
        <Container id='template-areas'>
            <Header id='header'>
                <h1>MARVAL 2023</h1>
                <input type='search' placeholder='Search Here' />
            </Header>

            
            <Sidebar id='sidebar'>
                <h1>Lista de Heróis:</h1>
                <br />
                {
                    (!herois) ? "Not found!" : <Card setHerois={herois}/>
                }                
            </Sidebar>


            <Content id='content'>
                
            </Content>
            

            <Footer id='footer'>
                <h1>Rodapé</h1>
            </Footer>

        </Container>
       
    )
}

export default Home;
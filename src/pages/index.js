import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import api from '../services/api';
import axios from 'axios';
import Card from '../components/Card';
import Search from '../components/Seach';



function Home(){

    const [herois, setHerois] = useState();

    const [isLoading, setLoading] = useState(true);

    const [url, setUrl] = useState(api);

    const [query, setQuery] = useState('');


         useEffect(() => {

            const fetch = async() =>  {

            if(query === ''){
                
                
                const response = await api.get(`characters`)            
                .then((response) => {
                console.log('primeiro log', response.data.data.results);
                setHerois(response.data.data.results);
                setLoading(false);    
                })
                .catch(error => console.log(error));
                
            } else {

                const params = {
                    nameStartsWith: 'iron',
                };
                
                const response = await api.get(`characters`, params )            
                .then((response) => {
                console.log('terceiro log', api)
                console.log('primeiro log', response.data.data.results);
                setHerois(response.data.data.results);
                setLoading(false);    
                })
                .catch(error => console.log(error));

            }           

            }
            
            fetch();


        }, [query]);
        
    
    return(
        <Container id='template-areas'>

            <Header id='header' >
                <h1>MARVAL 2023</h1>

                <Search search={(q) => setQuery(q)}></Search>
                { /* <input 
                    type='search' 
                    placeholder='teste' 
                /> */}
            </Header>

            
            <Sidebar id='sidebar'>
                <h1>Lista de Heróis:</h1>
                <br />
                {
                    (!herois) ? "Not found!" : <Card setHerois={herois} isLoading={isLoading} />
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
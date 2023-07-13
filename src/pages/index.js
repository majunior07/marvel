import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer,Titulo } from './styles';
import api from '../services/api';
import axios from 'axios';
import Card from '../components/Card';
import Search from '../components/Seach';
import Loading from '../components/Loading';




function Home(){

    const [herois, setHerois] = useState();

    const [isLoading, setLoading] = useState(true);

    const [url, setUrl] = useState(api);

    const [query, setQuery] = useState('');


         useEffect(() => {

            const fetch = async() =>  {          

                if(query === '') {

                    const response = await api.get(`characters`)            
                    .then((response) => {
                    console.log('primeiro log', response.data.data.results);
                    setHerois(response.data.data.results);
                    setLoading(false);    
                    })
                    .catch(error => console.log(error));

                } else {
                    const response = await api.get(`characters`, {
                        params: {
                            nameStartsWith: query,
                        }
                    })            
                   .then((response) => {
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
                <div>MARVEL 2023</div>

                <Search search={(q) => setQuery(q)}></Search>
                { /* <input 
                    type='search' 
                    placeholder='teste' 
                /> */}
            </Header>

            
            <Sidebar id='sidebar'>
                <Titulo>List of Heroes:</Titulo>
                <br />
                {
                    (!herois) ? <Loading /> : <Card setHerois={herois} isLoading={isLoading} />
                }                
            </Sidebar>


            <Content id='content'>
                
            </Content>
            

            <Footer id='footer'>
               
            </Footer>

        </Container>
       
    )
}

export default Home;
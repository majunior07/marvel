import React, { useEffect, useState } from 'react';
import { Container, Header, Sidebar, Content, Footer} from './styles';
import api from '../services/api';
import md5 from "md5";

//const [heroi, setHeroi] = useState({});

function Home(){

    const privateKey = `f77920237e6662c52e48ac4fc5afeb3d056043ac`;

    const publicKey = `e726759bd608036e5fbf4bb690b6ac93`;

    const time = Number(new Date());

    const hash = md5(time + privateKey + publicKey)

        useEffect(() => {
        
            api.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${process.env.REACT_APP_PUBLIC_KEY}&hash=${hash}`)
            .then((response) => {
                console.log(response.data);
                //setHeroi(response.data);
            })
            .catch(error => console.log(error));

        }, [])

        
    
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
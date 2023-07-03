import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import api from '../services/api';

function CardHerois() {

    const {id} = useParams();

    useEffect(() => {
        const fetch = async() => {

            const response = await api.get(``)
            
            .then((response) => {
                console.lof('segundo log', response.data);
                
            })
        }
    })

    return (
        <div>
            <h1>Herois Page {id}</h1>
            <p></p>
        </div>
    )
}

export default CardHerois
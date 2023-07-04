import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from '../services/api';

function CardHerois() {

    const {id} = useParams();

    const [herois, setHerois] = useState();

    useEffect(() => {
        const fetch = async() => {

            const response = await api.get(`/characters/${id}`)
            
            .then((response) => {
                console.log('segundo log', response.data);
                setHerois(response.data.data.results[0]);
            })
            .catch(error => console.log(error));
        }

        fetch();

    }, []);

    return (
        <Fragment>
            {
                (!herois) ? "Não encontrado!" : (
                    <div>
                        <div className="right">
                            <img src={`${herois.thumbnail.path}.${herois.thumbnail.extension} `}/>
                        </div>
                        <div className="left">
                            <h1>Id: {herois.id}</h1>
                            <h1>Name: {herois.name}</h1>
                            <h4>Description: {herois.description
}</h4>
                        </div>
                    </div>
                )
            }
        </Fragment>
    )
}

export default CardHerois
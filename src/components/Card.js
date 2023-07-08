import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { DivCard } from './styles';

function Card({setHerois, isLoading}){

    let navigate = useNavigate();
    
    return(
        isLoading ? "Loading..." :
        <Fragment>
            {
                (setHerois) ? (
                    setHerois.map(heroi => {
                        return(
                            <DivCard 
                                key={heroi.id} 
                                onClick={() => navigate(`/${heroi.id}`)}>
                                <h1>{heroi.name}</h1>
                            </DivCard>
                        )
                    })
                ) : ""
            }
        </Fragment>
    )
}

export default Card;
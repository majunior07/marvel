import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";
import { DivCard, Lista } from "../pages/styles";

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
                                <Lista>{heroi.name}</Lista>
                            </DivCard>
                        )
                    })
                ) : ""
            }
        </Fragment>
    )
}

export default Card;
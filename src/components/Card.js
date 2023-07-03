import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Card({setHerois}){

    let navigate = useNavigate();
    
    return(
        <Fragment>
            {
                (setHerois) ? (
                    setHerois.map(heroi => {
                        return(
                            <div 
                                key={heroi.id} 
                                onClick={() => navigate(`/${heroi.id}`)}>
                                <h1>{heroi.name}</h1>
                            </div>
                        )
                    })
                ) : ""
            }
        </Fragment>
    )
}

export default Card;
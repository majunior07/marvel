import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

function Card({setHerois, isLoading}){

    let navigate = useNavigate();
    
    return(
        isLoading ? <h1>Loading!!!</h1> :
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
import React from "react";

function Card({setHerois}){
    
    return(
        <div>
            {
                (setHerois) ? (
                    setHerois.map(heroi => {
                        return(
                            <div>
                                <h1>Card Page</h1>
                            </div>
                        )
                    })
                ) : ""
            }
        </div>
    )
}

export default Card;
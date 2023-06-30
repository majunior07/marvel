import React, { Fragment } from "react";

function Cards({setHerois}){
    return(
        <div>
            {
                (setHerois) ? (
                    setHerois.map(heroi => {
                        return(
                        <div> 
                            <img />
                            <div>
                                
                            </div>
                        </div>
                        )
                    })
                ) 
            }
        </div>     
    )
}

export default Cards;
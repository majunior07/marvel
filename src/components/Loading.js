import React from 'react';
import loading from '../img/loading.svg';
import { Loader } from '../pages/styles';



function Loading() {
    return(
        <Loader>
            <img src={loading} alt='Loading' />
        </Loader>
    )
}

export default Loading;
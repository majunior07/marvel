import styled from 'styled-components';

export const DivCard = styled.div`
        color: red;
        //margin-right: 40px;
        width: 420px;
        animation: typing 2s steps(22), blink .5s step-end infinite alternate;

        white-space: nowrap;
        overflow: hidden;
        border-right: .9px solid;
        //font-family: monospace;
        font-size: 1em;
    }

    @keyframes typing {
        from {
            width: 0;
        }        
    }

    @keyframes blink {
         50% {
            border-color: transparent;
        }
        
    }
`;
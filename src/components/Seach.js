import React, { useState } from "react";

function Search({search}){

    const [text, setText] = useState('');

    const onSearch = (e) => {
        setText(e.target.value)  // para gurdar o texto digitado no input
        search(e.target.value)  // para enviar os dados para a home.
    }

    return(
        <section>
            <form>
                <input 
                    type="text"
                    placeholder="Search Here"
                    autoFocus
                    onChange={onSearch}
                    value={text}
                />
            </form>
        </section>
    )
}

export default Search;
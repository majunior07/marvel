import React, { useState } from "react";

function Search({search}){

    const [text, setText] = useState('');

    const onSearch = (q) => {
        setText(q)
        search(q)
    }

    return(
        <section>
            <form>
                <input 
                    type="text"
                    placeholder="Search Here"
                    autoFocus
                    onChange={(e) => onSearch(e.target.value)}
                    value={text}
                />
            </form>
        </section>
    )
}

export default Search;
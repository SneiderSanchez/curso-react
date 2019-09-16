import React from 'react';
import './search.css';
/* function Search(props){
    return(
        <form></form>
    )
} */

const Search = (props) =>(
    <form 
        onSubmit={props.handleSubmit}
        className="Search">
        <input 
            ref={props.setRef}
            type="text" 
            className="Search-input"
            placeholder="Escribe alguito plox "
            name='search'
            value={props.value}
            onChange={props.handleChange}
        />
    </form>
)

export default Search
import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return(
        <div className="container">
            <input
                type="text"
                placeholder="Search for an Image"
                className="search-bar"
                onChange={e => props.onChange(e.target.value)}/>
        </div>
    );
}

export default SearchBar;
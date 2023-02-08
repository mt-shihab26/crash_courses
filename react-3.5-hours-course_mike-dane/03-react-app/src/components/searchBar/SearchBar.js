import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchItems }) => {
    const [searchBarValue, setSearchBarValue] = useState("");

    const handleInputChange = event => {
        setSearchBarValue(event.target.value);
    };

    const handleClearClick = event => {
        setSearchBarValue("");
    }

    const shouldDisplayButton = searchBarValue.length > 0;
    const filteredItems = searchItems.filter(item => item.includes(searchBarValue));

    return (
        <div>
            <input type="text" placeholder="Type here" value={searchBarValue} onChange={handleInputChange} />
            {shouldDisplayButton && <button onClick={handleClearClick}>Clear</button>}
            <ul>{filteredItems.map(item => <li key={item}>{item}</li>)}</ul>
        </div>
    )
};

export default SearchBar;
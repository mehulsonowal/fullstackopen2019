import React from 'react';

const SearchBar = ({ country, handleChange}) => {
    return (
        <form>
          <label>Search for a country</label>
          <input placeholder="Search for a country..." value={country} onChange={handleChange}/>
        </form>
    );
};

export default SearchBar;

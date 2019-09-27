import React from 'react';
import ShowButton from './ShowButton';

const DisplayCountry = ({ country, show, handleClick }) => {
    if(show){
    return (
        <div>
          <h1>{country.name}</h1>
          <div>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
          </div>
          <h2>Languages</h2>
          <ul>
            {country.languages.map((language) => <li key={language.name}>{language.name}</li>)}
          </ul>
          <img src={country.flag} alt="flag" height="250px" width="500px"/>
        </div>
    );
    }
    return <p>{country.name} <ShowButton display={show} handleClick={handleClick}/></p>;
};

export default DisplayCountry;

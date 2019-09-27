import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import DisplayCountries from './components/DisplayCountries';
import DisplayCountry from './components/DisplayCountry';
// import './App.css';

const App = () => {
    const [matches, setMatches] = useState([]);
    const [displays, setDisplays] = useState([]);
    const [country, setCountry] = useState('');

    useEffect(() => {
        if(country){
            axios.get(`https://restcountries.eu/rest/v2/name/${country}`)
                .then((res) => {
                    const countries = res.data;
                    console.log(countries);
                    setMatches(countries);
		    setDisplays(countries.map(x => false));
                })
                .catch((e) => {
                    setMatches([]);
                });
        }
    }, [country]);
    
    const handleChange = (e) => {
        setCountry(e.target.value);
    };

    const chooseDisplay = () => {
        const numMatches = matches.length;
        if(numMatches > 10){
            return (
                <p>Too many matches, specify another filter</p>
            );
        }
        else if(numMatches > 1){
	    console.log("printing many");
            return (
                <div>
                  <DisplayCountries countries={matches} displays={displays} setDisplays={setDisplays}/>
                </div>
            );
        }
        else if(numMatches === 1){
            return (
                <DisplayCountry country={matches[0]} show={true}/>
            );
        }
        else{
            return (
                <p>No matches found, specify another filter</p>
            );
        }
    };
    
    return (
        <div className="App">
          <SearchBar country={country} handleChange={handleChange}/>
          {chooseDisplay()}
        </div>
    );
};

export default App;

import React from 'react';
import DisplayCountry from './DisplayCountry';
// import ShowButton from './ShowButton';

const DisplayCountries = ({ countries, displays, setDisplays }) => {
    // const [displays, toggleDisplay] = useState(countries.map((country) => false));

    console.log(countries, 'in');
    
    const handleClick = (i) => {
        let newDisplay = [...displays];
        newDisplay[i] = !newDisplay[i];
        setDisplays(newDisplay);
    };
    
    return (countries.map((country, i) => {
	return  (
            <div key={country.name}>
	      <DisplayCountry country={country} show={displays[i]} handleClick={() => handleClick(i)}/>
             
            </div>
        );
    }));
};

// <ShowButton display={displays[i]} handleClick={() => handleClick(i)}/>
//     return (displays.map((display, i) => {
// 	console.log(countries, 'out');
//         return display ? (
//             <div key={countries[i].name}>
//               <DisplayCountry country={countries[i]}/>
//               <ShowButton display={displays[i]} handleClick={() => handleClick(i)}/>
//             </div>
//         ) : (
//             <div key={countries[i].name}>
//               <p> {countries[i].name}  <ShowButton display={displays[i]} handleClick={() => handleClick(i)}/> </p>
             
//             </div>
//         );
//     }));
// };

export default DisplayCountries;

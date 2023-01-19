//import React from 'react';
// import { Link } from 'react-router-dom'
 import { useState, useEffect } from 'react';
 import countriesData from '../countries.json';

 function CountriesList() {
   const [countries, setCountries] = useState([]);
   useEffect(() =>{
    setCountries(countriesData);
   }, []);

  return (
  <div>
    {countries.map((country) => { 
    return( 
    <div key={country._id} className="country">
    <>{country.name }</>
    </div>
    );
    })}
   </div>
 );
}

 export default CountriesList;
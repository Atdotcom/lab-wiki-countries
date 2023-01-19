import React from 'react';
//import { Link } from "react-router-dom";
import CountriesList from '../components/CountriesList';
function Navbar() {
  return (
    <nav className="Navbar navbar-dark bg-primary mb-3">
    <h2>Lab-WikiCountries</h2>
    <CountriesList />
      {/* <ul>
        <Link >Home</Link>       
        <Link >Detail</Link>
      </ul> */}
    </nav>
  );
}
export default Navbar;
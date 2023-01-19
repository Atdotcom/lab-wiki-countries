import Navbar from './components/Navbar';
import './App.css';
import { useState } from 'react';
import countriesData from './countries.json';
import { Routes, Route} from 'react-router-dom';
import CountriesList from './components/CountriesList';

function App() {
  const [countries, setCountries] = useState(countriesData);
  return (
    <div className="App">
      <Navbar />
       <Routes>
      <Route path='/' element={<CountriesList/>} />
      </Routes> 
    </div>
  );
}

export default App;

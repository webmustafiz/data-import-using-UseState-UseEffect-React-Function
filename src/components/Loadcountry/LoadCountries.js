import { useEffect, useState } from 'react';
import CountryDetails from '../CountryDetails/CountryDetails';
import './LoadCountries.css'

function LoadCountries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
    .then(data=>setCountries(data))
  }, [])
  return (
    <div className="main">
      <h3>Available Countries Visit <br />{countries.length}</h3>
      <div className="first">
        {
        countries.map(country=><CountryDetails countryname={country.name.common} flag={country.flags.png}></CountryDetails>)
      }
      </div>
    </div>
  )
}
export default LoadCountries

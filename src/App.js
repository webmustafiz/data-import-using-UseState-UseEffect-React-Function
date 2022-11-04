import logo from './logo.svg';
import './App.css';
import Country from './components/Loadcountry/LoadCountries';
import Modal from './components/Modal/Modal';
import CountryDetails from './components/CountryDetails/CountryDetails';


function App() {
  return (
    <div className="App">
      <Modal></Modal>
      <CountryDetails></CountryDetails>
      <Country></Country>
      
    </div>
  );
}

export default App;

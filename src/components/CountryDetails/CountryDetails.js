import './CountryDetails.css'


function CountryDetails(props) {
    return (
    <div className="countries">
            <h3>Country Name : {props.countryname}</h3>
            <img src={props.flag} alt="" />
    </div>
    )
}
export default CountryDetails
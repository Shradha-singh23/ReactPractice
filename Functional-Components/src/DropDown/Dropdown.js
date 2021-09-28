import React, {useState} from 'react';
import './Dropdown.css';

const countries = ['China','India','Indonesia','Pakistan','Bangladesh','Philippines','Vietnam','Thailand','Sri Lanka']

export default function Dropdown(){
    const[showDropdown,setShowDropdown] = useState(false);
    const[selectedCountry,setSelectedCountry] = useState('');

    const toggleDropDown = () => setShowDropdown(!showDropdown)

    const selectCountry = (country) => {
        setSelectedCountry(country)
        setShowDropdown(false)
    }

    return (
    <div className="dropdown">
        <div onClick={toggleDropDown} className="dropdown-btn">
            {selectedCountry}
        </div>
        {showDropdown &&
        <div className="content">
            {countries.map((country, index)=>{
                return(
                    <div 
                        key={index} 
                        onClick={() => selectCountry(country)}
                        className="items">
                            {country}
                    </div>
                )})}
        </div>}
    </div>)
}
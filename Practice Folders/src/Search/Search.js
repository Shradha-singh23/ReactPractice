import React,{useState} from 'react';

const data = ['Apple', 'Avocado', 'Banana', 'Gooseberries', 'Watermelon', 'Mulberry', 'Mango', 'Muskmelon', 'Pomegranate']

export default function Search(){
    const [filteredArray, setFilteredArray]= useState([])

    const handleOnChange = (event) => {
        const searchedWord = event.target.value;
        const newArray = data.filter(value => {
            return value.toLowerCase().includes(searchedWord.toLowerCase());
        });
        setFilteredArray(newArray)
    };
    return (
        <div>
            <input 
                type='text' 
                placeholder='Enter a Fruit Name'
                onChange={handleOnChange}
            />
            <button>Search</button>
            <div>
                {filteredArray.map((value,index)=>{
                    return(
                        <p key={index}>{value}</p>
                    )
                })}
            </div>
        </div>
    )
}
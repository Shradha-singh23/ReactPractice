import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]

export default function Translate() {
    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');

    const handleOnChange = (e) => {setText(e.target.value)};
    return (
        <div>
            <div  className="ui form">
                <div className="field">
                    <label> Enter Text: </label>
                    <input value={text} onChange={handleOnChange} />
                </div>
            </div>
            <Dropdown 
                label="Select a language"
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
            />
            <hr />
            <h3 className="ui header"> Output: </h3>
            <Convert text={text} language={language
            }/>
        </div>
    )
}
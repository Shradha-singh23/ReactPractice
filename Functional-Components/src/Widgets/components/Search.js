import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Search() {
    const [term, setTerm] = useState('');

    const handleOnChange = e => {
        setTerm(e.target.value)
    }

    useEffect(() => {
        const search = ( async () => {
            await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    actions: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
        });
        search();
    }, [term])

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search Term</label>
                    <input 
                    className="input"
                    value={term}
                    onChange={handleOnChange}
                    />
                </div>
            </div>
        </div>
    )
}
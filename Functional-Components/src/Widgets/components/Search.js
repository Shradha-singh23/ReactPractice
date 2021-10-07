import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function Search() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);

    const handleOnChange = e => {
        setTerm(e.target.value)
    }
    
    useEffect(() => {
        const search = ( async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term,
                },
            });
            setResults(data.query.search);
        });

        const timeoutId = setTimeout(() => {
            if(term){
                search();
            }    
        }, 500);
        
        return () => {
            clearTimeout(timeoutId);
        }
         
    }, [term])

    const renderedItems = results.map((result) => {
        return (
            <div key={result.pageid} className="ui item">
                <div className="ui content">
                    <div className=" ui header">
                        <a 
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                        >
                            {result.title}
                        </a>
                        
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
                <hr />
            </div>
        )
    });

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
            <div>
                {renderedItems}
            </div>
        </div>
    )
}
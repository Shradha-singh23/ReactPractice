import React,  { useState } from 'react';
import Dropdown from './components/Dropdown';
// import Accordion from './components/Accordion';
// import Search from './components/Search';

// const items = [
//     {
//         title: 'What is React?',
//         content: 'React is a JavaScript library for building performant and user-friendly interfaces'
//     },
//     {
//         title: 'When to choose React?',
//         content: 'React developers can integrate it with any backend, so it’s a great fit to almost any web app, especially if you plan to build large and complex apps.'
//     },
//     {
//         title: 'What are the popular React-based frameworks?',
//         content: 'There are many frameworks built upon React, but two are particularly popular nowadays – Next.js and Gatsby.'
//     }
// ]

const options = [
    {
        label: 'The color Red',
        value: 'red'
    },
    {
        label: 'The color Green',
        value: 'green'
    },
    {
        label: 'The shade of blue',
        value: 'blue'
    }
]

const Widgets = () => { 
    const [selected, setSelected] =  useState(options[0]);
    return (
        // <Accordion items = {items}/>
        // <Search />
        <Dropdown 
            selected={selected}
            onSelectedChange={setSelected}
            options={options}
        />
    )
}

export default Widgets;
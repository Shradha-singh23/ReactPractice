import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: 'What is React?',
        content: 'React is a JavaScript library for building performant and user-friendly interfaces'
    },
    {
        title: 'When to choose React?',
        content: 'React developers can integrate it with any backend, so it’s a great fit to almost any web app, especially if you plan to build large and complex apps.'
    },
    {
        title: 'What are the popular React-based frameworks?',
        content: 'There are many frameworks built upon React, but two are particularly popular nowadays – Next.js and Gatsby.'
    }
]

const Widgets = () => { 
    return (
        <Accordion items = {items}/>
    )
}

export default Widgets;
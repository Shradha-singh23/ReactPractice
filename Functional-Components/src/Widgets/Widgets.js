import React,{ useState } from 'react';
import Translate from './components/Translate';
import Dropdown from './components/Dropdown';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Route from './components/Route';
import Header from './components/Header';

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
        label: 'The shade of Blue',
        value: 'blue'
    }
]

const Widgets = () => { 
    const [selected, setSelected] =  useState(options[0]);
    
    return (
        <div>
            <Header />
            <Route path='/'>
                <Accordion items = {items}/>
            </Route>
            <Route path='/list'>
                <Search />
            </Route>
            <Route path='/dropdown'>
                <Dropdown 
                    selected={selected}
                    onSelectedChange={setSelected}
                    options={options}
                    label="Select a Color"
                />
            </Route>
            <Route path='/translate'>
                <Translate />
            </Route>
        </div>
    )
}

export default Widgets;
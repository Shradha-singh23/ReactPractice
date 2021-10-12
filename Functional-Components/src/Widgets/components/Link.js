import React from 'react';

export default function Link({ className, href, children }){
    const handleOnClick = (e) => {
        //code to implement the feature where we press cntrl in windows and cick on a nav, it opens in a new tab
        if(e.metaKey || e.ctrlKey){
            return;
        }
        e.preventDefault();
        window.history.pushState({}, '', href);
        
        //Communicates the route components that URL has changed.
        const navEvent = new PopStateEvent('popstate');
        window.dispatchEvent(navEvent);
    }
    return (
        <div>
            <a 
                className={className} 
                href={href}
                onClick={handleOnClick}
            >
                {children}
            </a>
        </div>
    )
}
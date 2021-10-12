import React from 'react';

export default function Link({ className, href, children }){
    return (
        <div>
            <a className={className} href={href}>{children}</a>
        </div>
    )
}
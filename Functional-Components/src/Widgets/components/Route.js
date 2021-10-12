import { useState, useEffect } from "react";

export default function Route({ path, children }) {
const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () =>{
            setCurrentPath(window.location.pathname)
        }
        
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        }
    }, [])
    return currentPath === path ? children : null;
}

//listen to the event that as been dispatched from the link component

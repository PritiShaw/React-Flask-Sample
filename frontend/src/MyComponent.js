import React, { useState, useEffect } from "react";
import './App.css';

function MyComponent(){
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [msg, setMsg] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/")
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              setMsg(result.msg);
            },
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
    }, [])

    if (error) {
        return <div className ="App" >Error: {error.message}</div>;
    }
    else if (!isLoaded) {
        return <div className = "App">Loading...</div>;
    }
    else {
        return(
            <div className = "App" >
                <p className= "App-header">{msg}</p>
            </div>
        );
    }
}

export default MyComponent;

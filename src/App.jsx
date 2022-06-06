import React, { useState, useEffect } from 'react';
import Greet from './componets/Greeter';


const App = () => {
    const [ username, setUsername ] = useState('');
    const handleUsernameChange = e => {
        setUsername(e.target.value);
    }
    const [ loaded, setLoaded ] = useState(false);
    const handleSetLoaded = () => {
        setLoaded(true);
    }

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 3000);
    }, [loaded]);

    if(loaded == false) {
        return (
            <>
            <h1>Website Loading...</h1>
            <button onClick={handleSetLoaded}>Click to Load</button>
            </>
        )
    }

    return (
    <>
        <h1>Hope this works</h1>
        <Greet phrase = "Hello" name= "Scott"/>
        <Greet phrase = "Hello there" name= "General Kenobi"/>
        <Greet phrase = "You're a bit short for a stormtrooper" name= "Luke"/>
        <input value={username} onChange={e =>setUsername(e.target.value)} />
        <p>You are logging in as {username}</p>
    </>
    );
};

export default App;
import React from 'react';
import useToggle from "../../hooks/useToggle";

const Toggle = () => {

    const [status, toggle] = useToggle('true')

    return (
        <div>
            <h2>Component status is: {status}</h2>
            <button onClick={toggle} style={{fontSize: "20px", margin: "15px"}}>Change status</button>
        </div>
    );
};

export default Toggle;
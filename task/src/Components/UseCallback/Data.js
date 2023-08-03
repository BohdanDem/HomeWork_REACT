import React from 'react';
import {memo} from "react";

const Data = ({data, addData}) => {
    console.log("Data is rendered")
    return (
        <div>
            <button style={{fontSize: "25px", margin: "15px"}} onClick={addData}>Add data</button>
            {data.map((el, idx) => <h2 key={idx}>{el}</h2>)}
        </div>
    );
};

export default memo(Data);
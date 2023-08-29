import React, {useMemo, useState} from 'react';

const TestUseMemo = () => {

    const [number, setNumber] = useState(0)
    const [data, setData] = useState(['info'])

    const hardLogic = (logic) => {
        for (let i = 0; i < 1000000000; i++) {
            logic += 1
        }
        return logic
    }

    const calc = useMemo(() => hardLogic(number), [number])
    const dataModify = () => {
        setNumber(prevState => prevState + 1)
    }

    const addData = () => {
        setData([...data, 'new data'])
    }

    return (
        <div>

            <button style={{fontSize: "25px", margin: "15px"}} onClick={dataModify}>Change Number</button>
            <h2>Number is: {number}</h2>
            <h2>Hard Logic: {calc}</h2>
            <br/>
            <hr/>
            <br/>
            <button style={{fontSize: "25px", margin: "15px"}} onClick={addData}>Add data</button>
            {data.map((el, idx) => <h2 key={idx}>{el}</h2>)}
        </div>
    );
};

export default TestUseMemo;
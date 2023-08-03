import React, {useCallback, useMemo, useState} from 'react';
import Data from "./Data";

const UseCallback = () => {

    const [numb, setNumb] = useState(0)
    const [data, setData] = useState(['info'])

    const hardLogic = (logic) => {
        for (let i = 0; i < 1000000000; i++) {
            logic += 1
        }
        return logic
    }

    const calc = useMemo(() => hardLogic(numb), [numb])
    const dataModify = () => {
        setNumb(prevState => prevState + 1)
    }

    const addData = useCallback(() => {setData([...data, 'new data'])}, [data])

    return (
        <div>

            <button style={{fontSize: "25px", margin: "15px"}} onClick={dataModify}>Change Numb</button>
            <h2>Number is: {numb}</h2>
            <h2>Hard Logic: {calc}</h2>
            <br/>
            <hr/>
            <br/>
            <Data data={data} addData={addData}/>
        </div>
    );
};

export default UseCallback;
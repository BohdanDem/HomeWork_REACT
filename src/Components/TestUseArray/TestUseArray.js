import React, {useRef} from 'react';
import useArray from "../../hooks/useArray";

const TestUseArray = () => {

    const {data, add, remove} = useArray(['asd', 'qwe', 'zxc', 'aaa'])

    const newItem = useRef()
    const addItem = () => {
        add(newItem.current.value)
        newItem.current.value = ''
    }

    return (
        <div>
            <div>
                <input type={"text"} ref={newItem}/>
                <button onClick={addItem}>Add new item</button>
            </div>
            {data.map((item, index) => (
                <div key={index}>
                    {item} <button onClick={() => remove(index)}>DELETE</button>
                </div>
            ))}
        </div>
    );
};

export default TestUseArray;
import React, {useRef} from 'react';
import useArrayUsers from "../../hooks/useArrayUsers";

const TestUseArrayUsers = () => {

    const {users, addUser, removeUser} = useArrayUsers([])

    const newItem = useRef()
    const addItem = () => {
        const id = users.length + 1
        addUser({id, name: newItem.current.value})
        newItem.current.value = ''
    }

    return (
        <div>
            <div>
                <input type={"text"} ref={newItem}/>
                <button onClick={addItem}>Add new user</button>
            </div>
            {users.map((item) => (
                <div key={item.id}>
                    {item.id}. {item.name}
                    <button onClick={() => removeUser(item.id)}>DELETE</button>
                </div>
            ))}
        </div>
    );
};

export default TestUseArrayUsers;
import {useState} from "react";

const useArrayUsers = (defaultValue) => {
    const [users, setUsers] = useState(Array.isArray(defaultValue)?defaultValue:[])

    const addUser = (item) => {
        setUsers((prevState) => [...prevState, item])
    }

    const removeUser = (id) => {
        setUsers((prevState) => {
            const index = prevState.findIndex(item => item.id === id)
            prevState.splice(index,1)
            return [...prevState]
        })
    }

    return {users, addUser, removeUser}
}
export default useArrayUsers
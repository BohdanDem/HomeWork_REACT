import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent/UserComponent";

const Users = ({addUser}) => {

    const [ users, setUsers ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((users) => {
                setUsers(users);
            })
    },[addUser]);

    return (
        <>
            {users.map((user) => {
                return (
                    <UserComponent user = {user}/>
                );
            })}
        </>
    );
};

export default Users;
import React, {useEffect} from 'react';
import UserComponent from "./UserComponent/UserComponent";
import {GetUsers} from "../Services/ApiServices";

const Users = ({users, setUsers}) => {

    useEffect(() => {
        GetUsers.getUsers().then(response => setUsers(response.data))},[setUsers]);

    return (
        <>
            {users.map((user) => {
                return (
                    <UserComponent key={user.id} user = {user}/>
                );
            })}
        </>
    );
};

export default Users;
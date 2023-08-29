import React from 'react';
import User from "./User/User";

const Users = (props) => {
    const {users} = props
    return (
        <>
            {users.map((user) => {
                return (
                    <User user = {user}/>
                );
            })}
        </>
    );
};

export default Users;
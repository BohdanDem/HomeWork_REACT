import React from 'react';
import styles from './UserComponent.module.css'

const UserComponent = ({user, setUserId}) => {
    const {id, name, username, email} = user

    return (
        <div className={styles.user}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <button onClick={() => setUserId(id)}>show posts</button>
        </div>
    );
};

export default UserComponent;
import React from 'react';
import styles from './UserComponent.module.css'

const UserComponent = ({user}) => {

    const {id, name, username, email, website} = user

    return (
        <div className={styles.user}>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>username: {username}</div>
            <div>email: {email}</div>
            <div>website: {website}</div>
        </div>
    );
};

export default UserComponent;
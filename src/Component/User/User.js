import React from 'react';
import UserDetails from "./UserInfo/UserDetails";
import UserAddress from "./UserInfo/UserAddress";
import Company from "./UserInfo/Company";
import styles from './UserStyles.module.css'

const User = (props) => {
    const {user} = props
    return (
        <div className={styles.user}>
            <UserDetails key = {user.id} user = {user}/>
            <UserAddress key = {user.address.suite} address = {user.address}/>
            <Company key = {user.company.name} company = {user.company}/>
        </div>
    );
};

export default User;
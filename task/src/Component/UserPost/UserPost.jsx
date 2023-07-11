import React from 'react';
import styles from './UserPost.module.css'

const UserPost = ({post}) => {
    const {id, userId, title, body} = post
    return (
        <div className={styles.post}>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default UserPost;
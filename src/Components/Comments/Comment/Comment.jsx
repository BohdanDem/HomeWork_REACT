import React from 'react';
import styles from './Comment.module.css'

const Comment = ({comment, handleClick}) => {
    const { postId, id, name, email, body } = comment

    return (
        <div onClick={() => handleClick(postId)} className={styles.comment}>
            <div>postId: {postId}</div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>body: {body}</div>
        </div>
    )
}

export default Comment;
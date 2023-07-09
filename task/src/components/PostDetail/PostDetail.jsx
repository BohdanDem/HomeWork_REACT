import React from 'react';
import styles from "./PostDetail.module.css"

const PostDetail = (props) => {
    const { post } = props

    return (
        <div className={styles.post}>
            <div>{post.body}</div>
        </div>
    )
}

export default PostDetail;

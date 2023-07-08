import styles from "./PostComponent.module.css"
import { useState } from 'react';

const PostComponent = (props) => {
    const { post } = props
    const [show, setShow] = useState(false)

    const postDetails = () => {
        show ? setShow(false) : setShow(true)
    };

    return (
        <div className={styles.post}>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <button onClick = {() => postDetails()}>Show Details</button>
            <div>{show && post.body}</div>
        </div>
    )
}

export default PostComponent;

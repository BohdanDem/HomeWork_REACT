import styles from "./PostComponent.module.css"
//import PostDetail from "../PostDetail/PostDetail";
import {useState} from "react";

const PostComponent = ({post}) => {
    const { id, title, body } = post
    const [show, setShow] = useState(false)

    return (
        <div className={styles.post}>
            <div>{id}</div>
            <div>{title}</div>
            <button onClick = {() => setShow(!show)}>Details</button>
            {/*{show && <PostDetail post = {post}/>}*/}
            {show && <div>{body}</div>}
        </div>
    )
}

export default PostComponent;

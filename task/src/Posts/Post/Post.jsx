import React from "react";
import styles from './Post.module.css'
class Post extends React.Component {
    constructor({post}) {
        super({post});
        this.state = {post}
    }

    render() {
        const {userId, id, title, body} = this.state.post
        return(
            <div className={styles.post}>
                <div><b>userId:</b> {userId}</div>
                <div><b>id:</b> {id}</div>
                <div><b>title:</b> {title}</div>
                <div><b>body:</b> {body}</div>
            </div>
        )
    }
}

export default Post
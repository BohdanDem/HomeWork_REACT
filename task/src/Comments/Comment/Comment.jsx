import React from "react";
import styles from './Comment.module.css'
class Comment extends React.Component {
    constructor({comment}) {
        super({comment});
        this.state = {comment}
    }

    render() {
        const {postId, id, name, email, body} = this.state.comment
        return(
            <div className={styles.comment}>
                <div><b>postId:</b> {postId}</div>
                <div><b>id:</b> {id}</div>
                <div><b>name:</b> {name}</div>
                <div><b>email:</b> {email}</div>
                <div><b>body:</b> {body}</div>
            </div>
        )
    }
}

export default Comment
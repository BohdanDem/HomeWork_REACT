import React from "react";
import Comment from "./Comment/Comment";
class Comments extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: []
        }
    }

    async getComments () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/comments')
            let data = await response.json()
            this.setState({comments: data})
        }catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getComments()
    }

    render() {
        return(
            <div>
                {this.state.comments.map((comment) => <Comment key = {comment.id} comment = {comment}/>)}
            </div>
        )
    }
}

export default Comments
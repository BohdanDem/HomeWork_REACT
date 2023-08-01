import React from "react";
import Post from "./Post/Post";
class Posts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    async getPosts () {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            let data = await response.json()
            this.setState({posts: data})
        }catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    render() {
        return(
            <div>
                {this.state.posts.map((post) => <Post key = {post.id} post = {post}/>)}
            </div>
        )
    }
}

export default Posts
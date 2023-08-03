import React, {useEffect, useState} from 'react';
import styles from './Fetch_UsersPostsComments.module.css'
import useFetch from "../../hooks/useFetch";

const FetchUsersPostsComments = () => {

    const [endpoint, setEndpoint] = useState( '/users')
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    // console.log(endpoint, typeof endpoint);

    const AddEndpoint = (data) => {
        setEndpoint(data)
    }
    useEffect(() => {}, [endpoint])

    useFetch(endpoint, setUsers, setPosts, setComments)

    return (
        <div className={styles.btn}>
            <button onClick={() => AddEndpoint('/users')}>Get Users</button>
            <button onClick={() => AddEndpoint('/posts')}>Get Posts</button>
            <button onClick={() => AddEndpoint('/comments')}>Get Comments</button>
            <div>
                {users.map((user) =>
                    <div>
                        {user.name}
                        {user.username}
                    </div>
                )}
            </div>
            <div>
                {posts.map((post) =>
                    <div>
                        {post.id}
                        {post.title}
                        {comments.body}
                    </div>
                )}
            </div>
            <div>
                {comments.map((comment) =>
                    <div>
                        {comments.id}
                        {comments.name}
                        {comments.body}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FetchUsersPostsComments;
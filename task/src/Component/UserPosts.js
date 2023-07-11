import React from 'react';
import { useEffect, useState } from 'react';
import UserPost from "./UserPost/UserPost";

const UserPosts = ({userId}) => {
    const [ UserPosts, setUserPosts ] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then((response) => response.json())
            .then(UserPosts => {
                setUserPosts(UserPosts);
            })
    },[userId]);

    return (
        <div>
            {UserPosts.map(post => <UserPost key = {post.id} post = {post}/>)}
        </div>
    );
};

export default UserPosts;
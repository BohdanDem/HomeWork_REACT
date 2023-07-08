import PostComponent from "./PostComponent/PostComponent";
import { useEffect, useState } from 'react';

export const PostContainer = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then((response) => response.json())
            .then((posts) => {
                setPosts(posts);
            })
    },[]);

    return (
        <>
            {posts.map((post, id) => {
                return (<PostComponent
                        key = {id}
                        post = {post}/>
                );
            })}
        </>);
};
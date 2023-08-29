import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import styles from './Post.module.css'
import {GetPost} from "../../Services/ApiServices";

const Post = () => {

    const {postId} = useParams()

    const [ post, setPost ] = useState([]);
    useEffect(() => {
        GetPost.getPost(postId).then(response => setPost(response.data))},[postId]);

    const { userId, id, title, body } = post
    return (
        <div className={styles.post}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>body: {body}</div>
        </div>
    );
};

export default Post;
import { useEffect, useState } from 'react';
import Comment from "./Comment/Comment";

export const Comments = () => {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then((response) => response.json())
            .then((comments) => {
                setComments(comments);
            })
    },[]);

    return (
        <>
            <h2>Comments</h2>
            {comments.map((comment) => {
                return (
                    <Comment
                        key = {comment.id}
                        comment = {comment}
                    />
                );
            })}
        </>);
};
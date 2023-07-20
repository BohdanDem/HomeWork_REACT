import { useEffect, useState } from 'react';
import Comment from "./Comment/Comment";
import {GetComments} from "../../Services/ApiServices";

export const Comments = () => {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {GetComments.getComments(setComments)},[]);

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
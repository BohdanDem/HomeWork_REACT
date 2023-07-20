import { useEffect, useState } from 'react';
import Comment from "./Comment/Comment";
import {GetComments} from "../../Services/ApiServices";
import {Outlet} from "react-router-dom";

export const Comments = () => {
    const [ comments, setComments ] = useState([]);

    useEffect(() => {GetComments.getComments(setComments)},[]);

    return (
        <>
            <h2>Comments</h2>
            <Outlet/>
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
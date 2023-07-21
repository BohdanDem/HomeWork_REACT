import { useEffect, useState } from 'react';
import Comment from "./Comment/Comment";
import {GetComments} from "../../Services/ApiServices";
import {Outlet, useNavigate} from "react-router-dom";
import {AppRoutes} from "../../Routing/AppRoutes";

export const Comments = () => {
    const [ comments, setComments ] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {GetComments.getComments(setComments)},[]);

    const handleClick = (postId) => navigate(AppRoutes.COMMENTS + '/' + postId)

    return (
        <>
            <h2>Comments</h2>
            <Outlet/>
            {comments.map((comment) => {
                return (
                    <Comment
                        key = {comment.id}
                        handleClick={handleClick}
                        comment = {comment}
                    />
                );
            })}
        </>);
};

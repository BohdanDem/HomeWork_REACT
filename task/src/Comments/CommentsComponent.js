import React, {useEffect} from 'react';
import CommentComponent from "./CommentComponent/CommentComponent";
import {GetComments} from "../Services/ApiServices";

const CommentsComponent = ({comments, setComments}) => {

    useEffect(() => {
        GetComments.getComments(setComments)
    },[]);

    return (
        <>
            {comments.map((comment) => {
                return (
                    <CommentComponent key={comment.id} comment = {comment}/>
                );
            })}
        </>
    );
};

export default CommentsComponent;
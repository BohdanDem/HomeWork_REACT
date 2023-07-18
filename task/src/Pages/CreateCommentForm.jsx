import React from 'react';
import styles from './CreateCommentForm.module.css'
import {useForm} from "react-hook-form";
import {GetNewComments} from "../Services/ApiServices";

const CreateCommentForm = ({setComments}) => {

    const { register, handleSubmit, reset} = useForm()

    const save = (comment) => {
        GetNewComments.getNewComments(comment, setComments, reset)
    };

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={handleSubmit(save)}>
                <div className={styles.formGroup}>
                    <label>Post Id</label>
                    <input type = "number" {...register('postId')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type = "text" {...register('name')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" {...register('email')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Body</label>
                    <input type = "text" {...register('body')}/>
                </div>
                <input type={"submit"} value={'Create new comment'}/>
            </form>
        </div>
    );
};

export default CreateCommentForm;
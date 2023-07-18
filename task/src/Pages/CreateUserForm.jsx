import React from 'react';
import styles from './CreateUserForm.module.css'
import {useForm} from "react-hook-form";
import {GetNewUsers} from "../Services/ApiServices";

const CreateUserForm = ({setUsers}) => {

    const { register, handleSubmit, reset} = useForm()

    const save = (user) => {
        GetNewUsers.getNewUsers(user, setUsers, reset)
    };

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={handleSubmit(save)}>
                <h3>Create new user</h3>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type = "text" {...register('name')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>UserName</label>
                    <input type = "text" {...register('username')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" {...register('email')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>WebSite</label>
                    <input type = "text" {...register('website')}/>
                </div>
                <input type={"submit"} value={'Create new user'}/>
            </form>
        </div>
    );
};

export default CreateUserForm;
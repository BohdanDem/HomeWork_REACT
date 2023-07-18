import React from 'react';
import styles from './CreateUserForm.module.css'
import {useForm} from "react-hook-form";

const CreateUserForm = ({setAddUser}) => {

    const { register, handleSubmit, reset, setValue} = useForm()

    const save = (car) => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        })
            .then((response) => response.json())
            .then(() => {
                setAddUser(prev => !prev)
                reset()
            });
    }

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
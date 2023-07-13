import React, {useState} from 'react';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [formValue, setFormValue] = useState({
        postId: '',
        name: '',
        email: '',
        body: ''
    })

    const handleFormChange = (key, value) => {
        setFormValue(prevState => ({
            ...prevState, [key]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(formValue);
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            body: JSON.stringify({
                postId: formValue.postId,
                name: formValue.name,
                email: formValue.email,
                body: formValue.body
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label>Post Id</label>
                    <input type = "number" onChange={(event) => handleFormChange('postId', event.target.value)} value={formValue.postId}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type = "text" onChange={(event) => handleFormChange('name', event.target.value)} value={formValue.name}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" onChange={(event) => handleFormChange('email', event.target.value)} value={formValue.email}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Body</label>
                    <input type = "text" onChange={(event) => handleFormChange('body', event.target.value)} value={formValue.body}/>
                </div>
                <input type={"submit"} value={'Create new comment'}/>
            </form>
        </div>
    );
};

export default LoginPage;
import React, {useState} from 'react';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        email: '',
        website: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        //console.log(formValue);
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: formValue.name,
                username: formValue.username,
                email: formValue.email,
                website: formValue.website
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
                <h3>Create new user</h3>
                <div className={styles.formGroup}>
                    <label>Name</label>
                    <input type = "text" ref={'nameRef'}/>
                </div>
                <div className={styles.formGroup}>
                    <label>UserName</label>
                    <input type = "text" ref={'usernameRef'}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" ref={'emailRef'}/>
                </div>
                <div className={styles.formGroup}>
                    <label>WebSite</label>
                    <input type = "text" ref={'websiteRef'}/>
                </div>
                <input type={"submit"} value={'Create new user'}/>
            </form>
        </div>
    );
};

export default LoginPage;
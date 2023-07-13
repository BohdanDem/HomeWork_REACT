import React, {useState} from 'react';
import styles from './LoginPage.module.css'

const LoginPage = () => {
    const [formValue, setFormValue] = useState({
        name: '',
        username: '',
        email: '',
        website: ''
    })

    const handleFormChange = (key, value) => {
        setFormValue(prevState => ({
            ...prevState, [key]: value
        }))
    }

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
                    <input type = "text" onChange={(event) => handleFormChange('name', event.target.value)} value={formValue.name}/>
                </div>
                <div className={styles.formGroup}>
                    <label>UserName</label>
                    <input type = "text" onChange={(event) => handleFormChange('username', event.target.value)} value={formValue.username}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" onChange={(event) => handleFormChange('email', event.target.value)} value={formValue.email}/>
                </div>
                <div className={styles.formGroup}>
                    <label>WebSite</label>
                    <input type = "text" onChange={(event) => handleFormChange('website', event.target.value)} value={formValue.website}/>
                </div>
                <input type={"submit"} value={'Create new user'}/>
            </form>
        </div>
    );
};

export default LoginPage;
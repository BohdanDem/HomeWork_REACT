import React, {useRef} from 'react';
import styles from './LoginPage.module.css'

const LoginPage = () => {

    const nameRef = useRef(null)
    const usernameRef = useRef(null)
    const emailRef = useRef(null)
    const websiteRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
                name: nameRef.current.value,
                username: usernameRef.current.value,
                email: emailRef.current.value,
                website: websiteRef.current.value
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
                    <input type = "text" ref={nameRef}/>
                </div>
                <div className={styles.formGroup}>
                    <label>UserName</label>
                    <input type = "text" ref={usernameRef}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type = "email" ref={emailRef}/>
                </div>
                <div className={styles.formGroup}>
                    <label>WebSite</label>
                    <input type = "text" ref={websiteRef}/>
                </div>
                <input type={"submit"} value={'Create new user'}/>
            </form>
        </div>
    );
};

export default LoginPage;
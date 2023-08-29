import React, {useRef} from 'react';
import styles from './CarStyle.module.css'

const CreateCar = () => {

    const brandRef = useRef(null)
    const priceRef = useRef(null)
    const yearRef = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('http://owu.linkpc.net/carsAPI/v1/cars', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                brand: brandRef.current.value,
                price: +priceRef.current.value,
                year: +yearRef.current.value,
            })
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }

    return (
        <div className={styles.page}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <h3>Create new car</h3>
                <div className={styles.formGroup}>
                    <label>Brand</label>
                    <input type = "text" ref={brandRef}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Price</label>
                    <input type = "number" ref={priceRef}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Year</label>
                    <input type = "number" ref={yearRef}/>
                </div>
                <input type={"submit"} value={'Create new car'}/>
            </form>
        </div>
    );
};

export default CreateCar;
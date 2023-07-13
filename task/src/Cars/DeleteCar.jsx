import React, {useRef} from 'react';
import styles from './CarStyle.module.css'

const DeleteCar = () => {

    const carIdRef = useRef(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        const carId = +carIdRef.current.value
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${carId}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(() => console.log('Delete successful'))
    }

    return (
        <div className={styles.page}>
            <form className={styles.formDelete} onSubmit={handleSubmit}>
                <h3>Delete car</h3>
                <div className={styles.formGroup}>
                    <label>Car Id</label>
                    <input type = "number" ref={carIdRef}/>
                </div>
                <input type={"submit"} value={'Delete car'}/>
            </form>
        </div>
    );
};

export default DeleteCar;
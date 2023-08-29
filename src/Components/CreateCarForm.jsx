import React, {useContext, useEffect} from 'react';
import styles from './CarStyle.module.css'
import {useForm} from "react-hook-form";
import {carService} from "../Services/carService";
import {Context} from "../App";

const CreateCarForm = () => {

    const { register, handleSubmit, reset, setValue} = useForm()
    const {setAddCars, updateCar, setUpdateCar} = useContext(Context);

    const save = (car) => {
        carService.saveCar(car)
            .then(() => {
                setAddCars()
            })
        reset()
    }

    useEffect(() => {
        if (updateCar) {
            setValue('brand', updateCar.brand)
            setValue('price', updateCar.price)
            setValue('year', updateCar.year)
        }
    }, [setValue, updateCar])

    const update = (car) => {
        carService.updateCar(car, updateCar)
            .then(() => {
                setAddCars()
            })
        setUpdateCar(null)
        reset()
    }

    return (
        <div className={styles.page}>
            <form onSubmit={handleSubmit(!updateCar ? save : update)} className={styles.form}>
                <h3>Create new car</h3>
                <div className={styles.formGroup}>
                    <label>Brand</label>
                    <input type = "text" {...register('brand')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Price</label>
                    <input type = "number" {...register('price')}/>
                </div>
                <div className={styles.formGroup}>
                    <label>Year</label>
                    <input type = "number" {...register('year')}/>
                </div>
                <button>{!updateCar?'Create new car':'Update car'}</button>
            </form>
        </div>
    );
};

export default CreateCarForm;
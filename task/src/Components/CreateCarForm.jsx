import React, {useEffect} from 'react';
import styles from './CarStyle.module.css'
import {useForm} from "react-hook-form";
import {carService} from "../Services/carService";

const CreateCarForm = ({setAddCars, updateCar, setUpdateCar}) => {

    const { register, handleSubmit, reset, setValue} = useForm()

    const save = (car) => {
        carService.saveCar(car)
        setAddCars(prev => !prev)
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
        setAddCars(prev => !prev)
        setUpdateCar(null)
        reset()
    }

    return (
        <div className={styles.page}>
            <form className={styles.form}>
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
                <button onClick={handleSubmit(save)}>Create new car</button>
                <button onClick={handleSubmit(update)}>Update car</button>
            </form>
        </div>
    );
};

export default CreateCarForm;
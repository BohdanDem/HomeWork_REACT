import React, {useEffect} from 'react';
import styles from './CarStyle.module.css'
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {saveCarThunk, updateCarFormThunk, updateCarThunk} from "../../ReduxCore/actions/carActions";

const CreateCarForm = () => {

    const { register, handleSubmit, reset, setValue} = useForm()

    const dispatch = useDispatch()

    const saveCar = (car) => {
        dispatch(saveCarThunk(car))
        reset()
    }

    const updateCar = (car) => {
        dispatch(updateCarThunk(car, updateCarForm))
        dispatch(updateCarFormThunk(null))
        reset()
    }

    const updateCarForm = useSelector((store) => store.cars.updateCarForm)
    console.log(updateCarForm);

    useEffect(() => {
        if (updateCarForm) {
            setValue('brand', updateCarForm.brand)
            setValue('price', updateCarForm.price)
            setValue('year', updateCarForm.year)
        }
    }, [setValue, updateCarForm])

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
                <button onClick={handleSubmit(saveCar)}>Create new car</button>
                <button onClick={handleSubmit(updateCar)}>Update car</button>
            </form>
        </div>
    );
};

export default CreateCarForm;
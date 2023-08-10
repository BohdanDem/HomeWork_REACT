import React from 'react';
import styles from './CarStyle.module.css'
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {saveCarThunk} from "../../ReduxCore/actions/carActions";

const CreateCarForm = () => {

    const { register, handleSubmit, reset, setValue} = useForm()

    const dispatch = useDispatch()

    const saveCar = (car) => {
        dispatch(saveCarThunk(car))
        reset()
    }

    // const update = (car) => {
    //     carService.updateCar(car, updateCar)
    //     setAddCars(prev => !prev)
    //     setUpdateCar(null)
    //     reset()
    // }

    // useEffect(() => {
    //     if (updateCar) {
    //         setValue('brand', updateCar.brand)
    //         setValue('price', updateCar.price)
    //         setValue('year', updateCar.year)
    //     }
    // }, [setValue, updateCar])

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
                <button>Update car</button>
            </form>
        </div>
    );
};

export default CreateCarForm;
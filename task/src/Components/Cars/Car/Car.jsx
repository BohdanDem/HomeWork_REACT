import React from 'react';
import styles from './Car.module.css'
import {useDispatch} from "react-redux";
import {deleteCarThunk, updateCarFormThunk} from "../../../ReduxCore/actions/carActions";

const Car = ({car}) => {

    const dispatch = useDispatch()
    const { id, brand, price, year } = car

    const handleDeleteCar = (id) => dispatch(deleteCarThunk(id))

    const handleUpdateCar = (car) => {
        dispatch(updateCarFormThunk(car))
    }

    return (
        <div className={styles.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => handleDeleteCar(id)}>Delete</button>
            <button onClick={() => handleUpdateCar(car)}>Update</button>
        </div>
    );
};

export default Car;
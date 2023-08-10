import React from 'react';
import styles from './Car.module.css'
import {useDispatch} from "react-redux";
import {deleteCarThunk} from "../../../ReduxCore/actions/carActions";

const Car = ({car}) => {

    const dispatch = useDispatch()
    const { id, brand, price, year } = car

    const handleDeleteCar = (id) => dispatch(deleteCarThunk(id))

    return (
        <div className={styles.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => handleDeleteCar(id)}>Delete</button>
        </div>
    );
};

export default Car;
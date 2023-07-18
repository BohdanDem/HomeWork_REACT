import React from 'react';
import styles from './CarComponent.module.css'
import {DeleteCar} from "../../../Services/ApiServices";

const CarComponent = ({car, setAddCars, setUpdateCar}) => {

    const { id, brand, price, year } = car

    const carDelete = () => {
        DeleteCar.deleteCar(car, setAddCars)
    }

    return (
        <div className={styles.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>Update car</button>
            <button onClick={() => carDelete()}>Delete car</button>
        </div>
    );
};

export default CarComponent;
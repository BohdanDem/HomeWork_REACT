import React from 'react';
import styles from './CarComponent.module.css'

const CarComponent = ({car, setAddCars, setUpdateCar}) => {

    const { id, brand, price, year } = car

    const carDelete = () => {
        fetch(`http://owu.linkpc.net/carsAPI/v1/cars/${+car.id}`, {
            method: 'DELETE',
        })
            .then(() => {
                setAddCars(prev => !prev)
            });
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
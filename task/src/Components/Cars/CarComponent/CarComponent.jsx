import React, {useContext} from 'react';
import styles from './CarComponent.module.css'
import {carService} from "../../../Services/carService";
import {Context} from "../../../App";

const CarComponent = ({car}) => {

    const { id, brand, price, year } = car
    const {setAddCars, setUpdateCar} = useContext(Context);

    const carDelete = () => {
        carService.deleteCar(car)
            .then(() => {
                 setAddCars()
            })
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
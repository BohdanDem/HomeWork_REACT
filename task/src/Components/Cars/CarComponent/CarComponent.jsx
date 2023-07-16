import React from 'react';
import styles from './CarComponent.module.css'

const CarComponent = ({car}) => {

    const { id, brand, price, year } = car

    return (
        <div className={styles.car}>
            <div>id: {id}</div>
            <div>brand: {brand}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
        </div>
    );
};

export default CarComponent;
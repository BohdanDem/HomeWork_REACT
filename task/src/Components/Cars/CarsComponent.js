import React, {useEffect, useState} from 'react';
import CarComponent from "./CarComponent/CarComponent";

const CarsComponent = () => {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then((response) => response.json())
            .then((cars) => {
                setCars(cars);
            })
    },[]);

    return (
        <>
            {cars.map((car) => {
                return (
                    <CarComponent key={car.id} car={car}/>
                );
            })}
        </>
    );
};

export default CarsComponent;
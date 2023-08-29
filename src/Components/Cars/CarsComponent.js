import React, {useEffect, useState} from 'react';
import CarComponent from "./CarComponent/CarComponent";

const CarsComponent = ({addCars, setAddCars, setUpdateCar}) => {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        fetch('http://owu.linkpc.net/carsAPI/v1/cars')
            .then((response) => response.json())
            .then((cars) => {
                setCars(cars);
            })
    },[addCars]);

    return (
        <>
            {cars.map((car) => {
                return (
                    <CarComponent key={car.id} car={car} setAddCars={setAddCars} setUpdateCar={setUpdateCar}/>
                );
            })}
        </>
    );
};

export default CarsComponent;
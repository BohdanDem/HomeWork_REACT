import React, {useEffect, useState} from 'react';
import CarComponent from "./CarComponent/CarComponent";
import {carService} from "../../Services/carService";

const CarsComponent = ({addCars, setAddCars, setUpdateCar}) => {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        carService.getCars().then(response => setCars(response.data))
    },[addCars])

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
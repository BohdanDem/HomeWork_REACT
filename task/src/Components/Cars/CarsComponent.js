import React, {useContext, useEffect, useState} from 'react';
import CarComponent from "./CarComponent/CarComponent";
import {carService} from "../../Services/carService";
import {Context} from "../../App";

const CarsComponent = () => {

    const {addCars} = useContext(Context);
    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        carService.getCars().then(response => setCars(response.data))
    },[addCars])

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
import React, {useEffect, useState} from 'react';
import Car from "./Car/Car";
import {carService} from "../../Services/carService";

const Cars = () => {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        carService.getCars().then(response => setCars(response.data))
    },[])

    return (
        <>
            {cars.map((car) => {
                return (
                    <Car key={car.id} car={car} />
                );
            })}
        </>
    );
};

export default Cars;
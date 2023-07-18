import React, {useEffect, useState} from 'react';
import CarComponent from "./CarComponent/CarComponent";
import {GetCars} from "../../Services/ApiServices";

const CarsComponent = ({addCars, setAddCars, setUpdateCar}) => {

    const [ cars, setCars ] = useState([]);

    useEffect(() => {
        GetCars.getCars(setCars)
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
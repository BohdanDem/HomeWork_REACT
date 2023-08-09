import React, {useEffect} from 'react';
import Car from "./Car/Car";
import {carService} from "../../Services/carService";
import {carActions} from "../../ReduxCore/actions/carActions";
import {useDispatch, useSelector} from "react-redux";

const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector((store) => store.cars.cars)

    useEffect(() => {
        carService.getCars().then(response => dispatch(carActions.setCars(response.data)))
    },[dispatch])

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
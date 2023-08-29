import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import Car from "./Car/Car";
import {getCarsThunk} from "../../ReduxCore/actions/carActions";
import CreateCarForm from "../CreateCarForm/CreateCarForm";

const Cars = () => {
    const dispatch = useDispatch()
    const cars = useSelector((store) => store.cars.cars)
    const getCars = () => dispatch(getCarsThunk())

    useEffect(() => {
        getCars()
    },[])

    return (
        <>
            <CreateCarForm/>
            {cars.map((car) => {
                return (
                    <Car key={car.id} car={car} />
                );
            })}
        </>
    );
};

export default Cars;
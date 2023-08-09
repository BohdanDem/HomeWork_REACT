import {CarsActionsTypes} from "../reducers/carsReducer";

export const carActions = {
    setCars: (cars) => ({type: CarsActionsTypes.SET_CARS, payload: cars})
}
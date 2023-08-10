import {CarsActionsTypes} from "../reducers/carsReducer";
import {carService} from "../../Services/carService";

export const carActions = {
    setCars: (cars) => ({type: CarsActionsTypes.SET_CARS, payload: cars})
}

export const getCarsThunk = () => (dispatch) => {
    carService.getCars().then(response => dispatch(carActions.setCars(response.data)))
}
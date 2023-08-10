import {CarsActionsTypes} from "../reducers/carsReducer";
import {carService} from "../../Services/carService";

export const carActions = {
    setCars: (cars) => ({type: CarsActionsTypes.SET_CARS, payload: cars}),
    deleteCar: (id) => ({type: CarsActionsTypes.DELETE_CAR, payload: id}),
    saveCar: (car) => ({type: CarsActionsTypes.SAVE_CAR, payload: car})
}

export const getCarsThunk = () => (dispatch) => {
    carService.getCars().then(response => dispatch(carActions.setCars(response.data)))
}

export const deleteCarThunk = (id) => (dispatch) => {
    carService.deleteCar(id).then(() => dispatch(carActions.deleteCar(id)))
}

export const saveCarThunk = (car) => (dispatch) => {
    carService.saveCar(car).then((response) => dispatch(carActions.saveCar(response.data)))
}
import axios from "axios";
import {baseURL} from "../API/Endpoints";

export const GetCars = {
    getCars: async (setCars) => {
        let response = await axios.get(baseURL)
        setCars(response.data);
    }
}

export const SaveCar = {
    saveCar: (car, setAddCars, reset) => {
        axios.post(baseURL, car)
            .then(() => {
                setAddCars(prev => !prev)
                reset()
            })
    }
}

export const UpdateCar = {
    updateCar: (car, setAddCars, setUpdateCar, reset, updateCar) => {
        axios.put(`${baseURL}/${updateCar.id}`, car)
            .then(() => {
                setAddCars(prev => !prev)
                setUpdateCar(null)
                reset()
            })
    }
}

export const DeleteCar = {
    deleteCar: (car, setAddCars) => {
        axios.delete(`${baseURL}/${car.id}`)
            .then(() => {
                setAddCars(prev => !prev)
            })
    }
}

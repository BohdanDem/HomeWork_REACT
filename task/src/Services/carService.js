import {apiService} from "./ApiServices";
import {baseURL, EndPoints} from "../API/Endpoints";

export const carService = {
    getCars: () => apiService.get(EndPoints.CARS),
    deleteCar: (id) => apiService.delete(EndPoints.CARS + `/${id}`),
    saveCar: (car) => apiService.post(baseURL + EndPoints.CARS, car),
    updateCar: (car, updateCarForm) => apiService.put(EndPoints.CARS + `/${updateCarForm.id}`, car),
}
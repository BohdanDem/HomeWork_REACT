import {apiService} from "./ApiServices";
import {EndPoints} from "../API/Endpoints";

export const carService = {
    getCars: () => apiService.get(EndPoints.CARS),
    deleteCar: (id) => apiService.delete(EndPoints.CARS + `/${id}`)
}
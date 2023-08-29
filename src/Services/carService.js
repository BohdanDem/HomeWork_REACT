import {apiService} from "./ApiServices";
import {baseURL, EndPoints} from "../API/Endpoints";

export const carService = {
    getCars: () => apiService.get(baseURL + EndPoints.CARS),
}
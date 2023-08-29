import {baseURL} from "../API/Endpoints";
import {apiService} from "./apiService";

export const carService = {
    getCars: () => apiService.get(baseURL),
    saveCar: (car) => apiService.post(baseURL, car),
    updateCar: (car, updateCar) => apiService.put(`${baseURL}/${updateCar.id}`, car),
    deleteCar: (car) => apiService.delete(`${baseURL}/${car.id}`)
}

// export const GetCars = {
//     getCars: async () => {
//         return await axios.get(baseURL)
//     }
// }

// export const SaveCar = {
//     saveCar: (car, setAddCars) => {
//         axios.post(baseURL, car)
//             .then(() => {
//                 setAddCars(prev => !prev)
//             })
//     }
// }

// export const UpdateCar = {
//     updateCar: (car, setAddCars, setUpdateCar, reset, updateCar) => {
//         axios.put(`${baseURL}/${updateCar.id}`, car)
//             .then(() => {
//                 setAddCars(prev => !prev)
//                 setUpdateCar(null)
//                 reset()
//             })
//     }
// }

// export const DeleteCar = {
//     deleteCar: (car, setAddCars) => {
//         axios.delete(`${baseURL}/${car.id}`)
//             .then(() => {
//                 setAddCars(prev => !prev)
//             })
//     }
// }
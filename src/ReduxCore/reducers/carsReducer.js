const initialState = {
    cars: [],
    error: '',
    updateCarForm: null
};

export const CarsActionsTypes = {
    SET_CARS: 'SET_CARS',
    SET_ERROR: 'SET_ERROR',
    DELETE_CAR: 'DELETE_CAR',
    SAVE_CAR: 'SAVE_CAR',
    UPDATE_CAR_FORM: 'UPDATE_CAR_FORM',
    UPDATE_CAR: 'UPDATE_CAR'
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CarsActionsTypes.SET_CARS:
            return{
                ...state,
                cars: action.payload,
            }
        case CarsActionsTypes.DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter((car) => car.id !== action.payload)
            }
        case CarsActionsTypes.SAVE_CAR:
            return {
                ...state,
                cars: [...state.cars, action.payload]
            }
        case CarsActionsTypes.UPDATE_CAR_FORM:
            return {
                ...state,
                updateCarForm: action.payload
            }
        case CarsActionsTypes.UPDATE_CAR:
            return {
                ...state,
                cars: state.cars.map((item) => {
                    if(item.id === state.updateCarForm.id) {
                        item = {id: item.id, ...action.payload.car}
                    }
                    return item
                })
            }
        case CarsActionsTypes.SET_ERROR:
            return{
                ...state,
                error: action.payload
            }
        default:
            return state
    }
};

export {
    carsReducer
}
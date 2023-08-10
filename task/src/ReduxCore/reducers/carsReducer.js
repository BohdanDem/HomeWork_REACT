const initialState = {
    cars: [],
    error: ''
};

export const CarsActionsTypes = {
    SET_CARS: 'SET_CARS',
    SET_ERROR: 'SET_ERROR'
}

const carsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CarsActionsTypes.SET_CARS:
            return{
                ...state,
                cars: action.payload,
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
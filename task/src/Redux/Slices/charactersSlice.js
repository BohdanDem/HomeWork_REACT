import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {progressActions} from "./progressSlice";
import {charactersService} from "../../Services/charactersService";

const initialState = {
    characters: []
}

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async ({ids}, thunkAPI) => {
        try {
            thunkAPI.dispatch(progressActions.setIsLoading(true))
            const {data} = await charactersService.getCharacters(ids)
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {
            thunkAPI.dispatch(progressActions.setIsLoading(false))
        }
    }
)

const slice = createSlice({
    name: 'charactersSlice',
    initialState,
    reducers: {},
    extraReducers: builder => builder
        .addCase(getCharacters.fulfilled, (state, actions) => {
            state.characters = actions.payload
        })
})

const {reducer: charactersReducer, actions} = slice

const charactersActions = {
    ...actions,
    getCharacters
}

export {
    charactersActions,
    charactersReducer
}




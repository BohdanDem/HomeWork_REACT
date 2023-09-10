import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {characterService} from "../../services";

const initialState = {
    characters: []
}

const getCharacters = createAsyncThunk(
    'charactersSlice/getCharacters',
    async ({ids}, thunkAPI) => {
        try {
            const {data} = await characterService.getByIds(ids)
            return data
        } catch (e){
            return thunkAPI.rejectWithValue(e.response.data)
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

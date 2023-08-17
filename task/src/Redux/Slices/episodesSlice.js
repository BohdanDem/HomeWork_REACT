import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


const initialState = {
    episodes: [],
    prevPage: null,
    nextPage: null,
    errors: null,
    isLoading: null
}

const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ()=>{
        try {

        } catch (e) {

        }
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled)
})

const {reducer: episodeReducer, actions} = episodesSlice

const episodeActions = {

}

export {
    episodeReducer,
    episodeActions
}
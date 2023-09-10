import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";


const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
    pages: 0,
    current: null
}

const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ({page}, thunkAPI)=>{
        try {
            const {data} = await episodesService.getAll(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {
        setCurrent: (state, actions) => {
            state.current = actions.payload
        }
    },
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, actions) => {
                const {info: {pages}, results} = actions.payload
                state.pages = pages
                state.episodes = results
                state.current = null
            })
})

const {reducer: episodesReducer, actions} = episodesSlice

const episodeActions = {
    ...actions,
    getEpisodes
}

export {
    episodesReducer,
    episodeActions
}
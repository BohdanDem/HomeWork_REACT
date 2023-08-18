import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../Services/episodesService";


const initialState = {
    pages: 0,
    episodes: [],
}

const getEpisodes = createAsyncThunk(
    'episodesSlice/getEpisodes',
    async ({page}, thunkAPI)=>{
        try {
            const {data} = await episodesService.getEpisodes(page)
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        } finally {

        }
    }
)

const episodesSlice = createSlice({
    name: "episodesSlice",
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, actions) => {
                const {info: {pages}, results} = actions.payload
                state.pages = pages
                state.episodes = results
            })
})

const {reducer: episodeReducer, actions} = episodesSlice

const episodeActions = {
    ...actions,
    getEpisodes
}

export {
    episodeReducer,
    episodeActions
}
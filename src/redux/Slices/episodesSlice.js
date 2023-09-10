import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {episodesService} from "../../services";

const initialState = {
    prevPage: null,
    nextPage: null,
    episodes: [],
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
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getEpisodes.fulfilled, (state, actions) => {
                state.episodes = actions.payload.results.map(episode => (
                        {
                            ...episode,
                            characters: episode.characters.map(character => character.split('/').slice(-1)[0]).join(',')
                        })
                    );
                state.prevPage = actions.payload.info.prev
                state.nextPage = actions.payload.info.next
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
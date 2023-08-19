import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./Slices/episodesSlice";
import {progressReducer} from "./Slices/progressSlice";
import {charactersReducer} from "./Slices/charactersSlice";

const store = configureStore({
    reducer: {
        episodes: episodeReducer,
        characters: charactersReducer,
        progress: progressReducer
    }
})

export {
    store
}
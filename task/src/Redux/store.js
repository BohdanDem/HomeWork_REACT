import {configureStore} from "@reduxjs/toolkit";
import {episodeReducer} from "./Slices/episodesSlice";

const store = configureStore({
    reducer: {
        episodes: episodeReducer
    }
})

export {
    store
}
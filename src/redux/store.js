import {configureStore} from "@reduxjs/toolkit";
import {charactersReducer} from "./Slices/charactersSlice";
import {episodesReducer} from "./Slices/episodesSlice";

const store = configureStore({
    reducer: {
        episodes: episodesReducer,
        characters: charactersReducer
    }
})

export {
    store
}
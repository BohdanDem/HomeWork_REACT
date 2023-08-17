import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import EpisodesPage from "../Pages/EpisodesPage/EpisodesPage";
import CharactersPage from "../Pages/CharactersPage/CharactersPage";
import {AppRoutes} from "./AppRoutes";


createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        children: [
            {
                path: AppRoutes.EPISODES,
                element: <EpisodesPage/>
            },
            {
                path: AppRoutes.CHARACTERS,
                element: <CharactersPage/>
            }
        ]
    }
])
import {createBrowserRouter, Navigate} from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";
import CharactersPage from "../Pages/CharactersPage/CharactersPage";
import {AppRoutes} from "./AppRoutes";
import {EpisodesPage} from "../Pages/EpisodesPage/EpisodesPage";


const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Oops, wrong way</h2>,
        children: [
            {
                index: true,
                element: <Navigate to={AppRoutes.EPISODES}/>
            },
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

export {
    router
}
import {createBrowserRouter,} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import {Comments} from "../Components/Comments/Comments";
import {Todos} from "../Components/Todos/Todos";
import {Albums} from "../Components/Albums/Albums";
import {AppRoutes} from "./AppRoutes";
import Post from "../Components/Post/Post";

export const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.TODOS,
                element: <Todos/>,
            },
            {
                path: AppRoutes.ALBUMS,
                element: <Albums/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>,
                children: [
                    {
                        path: AppRoutes.POST_ID,
                        element: <Post/>
                    }
                ]
            },
        ]
    }
]);
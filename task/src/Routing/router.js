import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";

export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.POSTS,
                element: <h1>POSTS</h1>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <h1>COMMENTS</h1>
            },
            {
                path: AppRoutes.CARS,
                element: <h1>CARS</h1>
            }
        ]
    }
])
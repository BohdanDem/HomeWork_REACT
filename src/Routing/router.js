import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import Posts from "../Posts/Posts";
import Comments from "../Comments/Comments";
import Cars from "../Cars/Cars";

export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.POSTS,
                element: <Posts/>
            },
            {
                path: AppRoutes.COMMENTS,
                element: <Comments/>
            },
            {
                path: AppRoutes.CARS,
                element: <Cars/>
            }
        ]
    }
])
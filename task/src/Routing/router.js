import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import Cars from "../Components/Cars/Cars";

export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.CARS,
                element: <Cars/>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <h1>Comments</h1>,
            }
        ]
    }
]);
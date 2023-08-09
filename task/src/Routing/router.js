import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Components/AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";

export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.TODOS,
                element: <h1>Todos</h1>,
            },
            {
                path: AppRoutes.COMMENTS,
                element: <h1>Comments</h1>,
            }
        ]
    }
]);
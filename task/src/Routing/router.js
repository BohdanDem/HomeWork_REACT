import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../AppLayout/AppLayout";
import {AppRoutes} from "./AppRoutes";
import TestUseMemo from "../Components/TestUseMemo/TestUseMemo";
import UseCallback from "../Components/UseCallback/UseCallback";
import Toggle from "../Components/Toggle/Toggle";
import Fetch_UsersPostsComments from "../Components/Fetch_UsersPostsComments/Fetch_UsersPostsComments";

export const router = createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        errorElement: <h2>Ops, wrong way</h2>,
        children: [
            {
                path: AppRoutes.TEST_USE_MEMO,
                element: <TestUseMemo/>
            },
            {
                path: AppRoutes.USE_CALLBACK,
                element: <UseCallback/>
            },
            {
                path: AppRoutes.USE_TOGGLE,
                element: <Toggle/>
            },
            {
                path: AppRoutes.USE_FETCH,
                element: <Fetch_UsersPostsComments/>
            },
            {
                path: AppRoutes.USE_ARRAY,
                element: <h1>useArray - is not implemented yet</h1>
            }
        ]
    }
])
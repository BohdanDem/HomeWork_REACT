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
                path: AppRoutes.TEST_USE_MEMO,
                element: <h1>TestUseMemo component</h1>
            },
            {
                path: AppRoutes.USE_CALLBACK,
                element: <h1>useCallback</h1>
            },
            {
                path: AppRoutes.USE_TOGGLE,
                element: <h1>useToggle</h1>
            },
            {
                path: AppRoutes.USE_FETCH,
                element: <h1>useFetch</h1>
            },
            {
                path: AppRoutes.USE_ARRAY,
                element: <h1>useArray</h1>
            }
        ]
    }
])
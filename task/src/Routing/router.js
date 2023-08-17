import {createBrowserRouter} from "react-router-dom";
import AppLayout from "../Layouts/AppLayout";


createBrowserRouter([
    {
        path: '',
        element: <AppLayout/>,
        children: [
            {

            }
        ]
    }
])
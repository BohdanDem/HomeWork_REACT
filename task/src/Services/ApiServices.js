import axios from "axios";
import {baseURL, Endpoints} from "../Api/Endpoints";

export const GetComments = {
    getComments: async (setComments) => {
        let response = await axios.get(baseURL + Endpoints.USERS)
        setComments(response.data);
    }
}

export const GetNewComments = {
    getNewComments: async (comment, setComments, reset) => {
        let response = await axios.post(baseURL + Endpoints.USERS, comment)
        setComments(prev => [...prev, response.data])
        reset()
    }
}
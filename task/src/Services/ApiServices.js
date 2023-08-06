import axios from "axios";
import {baseURL, Endpoints} from "../Api/Endpoints";

export const GetComments = {
    getComments: async () => {
        return await axios.get(baseURL + Endpoints.USERS)
    }
}

export const GetNewComments = {
    getNewComments: async (comment) => {
        return await axios.post(baseURL + Endpoints.USERS, comment)
    }
}
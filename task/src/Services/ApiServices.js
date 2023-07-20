import axios from "axios";
import {baseURL, EndPoints} from "../Api/Endpoints";

export const GetTodos = {
    getTodos: async (setTodos) => {
        let response = await axios.get(baseURL + EndPoints)
        setTodos(response.data);
    }
}

export const GetAlbums = {
    getAlbums: async (setAlbums) => {
        let response = await axios.get()
        setAlbums(response.data);
    }
}

export const GetComments = {
    getComments: async (setComments) => {
        let response = await axios.get()
        setComments(response.data);
    }
}
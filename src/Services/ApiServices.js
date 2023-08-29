import axios from "axios";
import {baseURL, EndPoints} from "../API/Endpoints";

export const GetTodos = {
    getTodos: async () => {
        return  await axios.get(baseURL + EndPoints.TODOS)
    }
}

export const GetAlbums = {
    getAlbums: async () => {
        return  await axios.get(baseURL + EndPoints.ALBUMS)
    }
}

export const GetComments = {
    getComments: async () => {
        return await axios.get(baseURL + EndPoints.COMMENTS)
    }
}

export const GetPost = {
    getPost: async (postId) => {
        return await axios.get(baseURL + EndPoints.POSTS + postId)
    }
}
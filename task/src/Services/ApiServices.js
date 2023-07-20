import axios from "axios";
import {baseURL, EndPoints} from "../API/Endpoints";

export const GetTodos = {
    getTodos: async (setTodos) => {
        let response = await axios.get(baseURL + EndPoints.TODOS)
        setTodos(response.data);
    }
}

export const GetAlbums = {
    getAlbums: async (setAlbums) => {
        let response = await axios.get(baseURL + EndPoints.ALBUMS)
        setAlbums(response.data);
    }
}

export const GetComments = {
    getComments: async (setComments) => {
        let response = await axios.get(baseURL + EndPoints.COMMENTS)
        setComments(response.data);
    }
}

export const GetPost = {
    getPost: async (setPost, postId) => {
        let response = await axios.get(baseURL + EndPoints.POSTS + postId)
        setPost(response.data);
    }
}
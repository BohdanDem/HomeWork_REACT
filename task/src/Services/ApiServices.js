import axios from "axios";
import {baseURL} from "../API/Endpoints";

const apiService = axios.create({baseURL});

export {
    apiService
}
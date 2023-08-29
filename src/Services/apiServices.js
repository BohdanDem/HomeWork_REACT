import axios from "axios";
import {baseURL} from "../API/EndPoints";

export const apiService = axios.create({baseURL})
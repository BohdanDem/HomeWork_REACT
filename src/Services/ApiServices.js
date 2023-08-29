import axios from "axios";
import {baseURL, Endpoints} from "../Api/Endpoints";

export const GetUsers = {
    getUsers: async () => {
        return await axios.get(baseURL + Endpoints.USERS)
    }
}

export const GetNewUsers = {
    getNewUsers: async (user) => {
        return await axios.post(baseURL + Endpoints.USERS, user)
    }
}

// export const GetUsers = {
//     getUsers: (setUsers) => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then((response) => response.json())
//             .then(data => {
//                 setUsers(data);
//             })
//     }
// }

// export const GetNewUsers = {
//     getNewUsers: (user, setUsers, reset) => {
//         fetch('https://jsonplaceholder.typicode.com/users', {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         })
//             .then((response) => response.json())
//             .then(value => setUsers(prev => [...prev, value]))
//         reset()
//     }
// }
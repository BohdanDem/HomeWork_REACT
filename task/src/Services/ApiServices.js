import axios from "axios";
import {baseURL, Endpoints} from "../Api/Endpoints";

export const GetUsers = {
    getUsers: async (setUsers) => {
        let response = await axios.get(baseURL + Endpoints.USERS)
        setUsers(response.data);
    }
}

export const GetNewUsers = {
    getNewUsers: async (user, setUsers, reset) => {
        let response = await axios.post(baseURL + Endpoints.USERS, user)
        setUsers(prev => [...prev, response.data])
        reset()
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
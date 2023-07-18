import axios from "axios";

export const GetUsers = {
    getUsers: async (setUsers) => {
        let response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setUsers(response.data);
    }
}

export const GetNewUsers = {
    getNewUsers: async (user, setUsers, reset) => {
        let response = await axios.post('https://jsonplaceholder.typicode.com/users', user)
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
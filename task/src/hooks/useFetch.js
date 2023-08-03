import {useEffect} from "react";

const baseURL = 'https://jsonplaceholder.typicode.com'

function useFetch(endpoint, setUsers, setPosts, setComments){

    console.log(endpoint, typeof endpoint);
        useEffect(() => {
            fetch(baseURL + endpoint)
                .then(response => response.json())
                .then(data =>
                {
                    if (endpoint === '/users') {
                        setUsers(data)
                    }else if (endpoint === '/posts') {
                        setPosts(data)
                    }if (endpoint === '/comments') {
                        setComments(data)
                    }
                })
                .catch(error => {
                    console.error('There was an error!', error);
                });
        }, [endpoint])
}
export default useFetch
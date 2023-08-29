import {useEffect, useState} from "react";

const baseURL = 'https://jsonplaceholder.typicode.com'

function useFetch(endpoint){

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(baseURL + endpoint)
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => {
                console.error('There was an error!', error);
            });}, [endpoint])
    return data
}
export default useFetch
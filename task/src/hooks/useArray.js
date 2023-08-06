import {useState} from "react";

const useArray = (defaultValue) => {
    const [data, setData] = useState(Array.isArray(defaultValue)?defaultValue:[])

    const add = (item) => {
        setData((prevState) => [...prevState, item])
    }

    const remove = (id) => {
        setData((prevState) => {
            prevState.splice(id,1)
            return [...prevState]
        })
    }

    return {data, add, remove}
}
export default useArray
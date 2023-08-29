import {useState} from "react";

function useToggle(defaultValue){
    const [status, setStatus] = useState(defaultValue)
    const toggle = () => setStatus((prevState) => prevState === 'true' ? 'false' : 'true')
    return [status, toggle]
}

export default useToggle
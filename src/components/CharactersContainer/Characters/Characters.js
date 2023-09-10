import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import {Character} from "../Character/Character";
import {charactersActions} from "../../../redux/Slices/charactersSlice";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters);
    const {state: {ids}} = useLocation();

    useEffect(() => {
        dispatch(charactersActions.getCharacters({ids}))
    }, [ids, dispatch])

    return (

        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export {Characters};
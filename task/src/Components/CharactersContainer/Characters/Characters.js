import React, {useEffect} from 'react';
import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../../Redux/Slices/charactersSlice";
import Character from "../Character/Character";

const Characters = () => {

    const {state: {ids}} = useLocation()
    const dispatch = useDispatch()
    const {characters} = useSelector(state => state.characters)

    useEffect(() => {
        dispatch(charactersActions.getCharacters({ids}))
    }, [dispatch, ids])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/>)}
        </div>
    );
};

export default Characters;
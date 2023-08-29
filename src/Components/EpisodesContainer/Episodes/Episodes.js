import React, {useEffect} from 'react';
import Episode from "../Episode/Episode";
import {useDispatch, useSelector} from "react-redux";
import {episodeActions} from "../../../Redux/Slices/episodesSlice";
import {useSearchParams} from "react-router-dom";
import styles from './Episodes.module.css'

const Episodes = () => {

    const dispatch = useDispatch()
    const {episodes} = useSelector(state => state.episodes)
    const [query, setQuery] = useSearchParams({page:'1'})
    const page = query.get('page')

    useEffect(() => {
        dispatch(episodeActions.getEpisodes({page}))
    }, [dispatch, page])

    return (
        <div className={styles.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export default Episodes;
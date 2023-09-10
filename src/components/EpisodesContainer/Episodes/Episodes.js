import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css';
import {episodeActions} from "../../../redux/Slices/episodesSlice";

const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes);
    const [query, setQuery] = useSearchParams({page: '1'});
    const page = query.get('page')

    useEffect(() => {
            dispatch(episodeActions.getEpisodes({page}))
    }, [page, dispatch])

    return (
        <div className={css.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};
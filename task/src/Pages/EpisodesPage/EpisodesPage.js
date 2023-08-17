import React from 'react';
import Episodes from "../../Components/EpisodesContainer/Episodes/Episodes";
import {EpisodePagination} from "../../Components/EpisodesContainer/EpisodePagination/EpisodePagination";

const EpisodesPage = () => {
    return (
        <div>
            EpisodesPage
            <EpisodePagination/>
            <Episodes/>
        </div>
    );
};

export {EpisodesPage};
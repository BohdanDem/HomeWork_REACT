import React from 'react';
import Episodes from "../../Components/EpisodesContainer/Episodes/Episodes";
import {Pagination} from "@mui/material";
import {useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

const EpisodesPage = () => {

    const [query ,setQuery] = useSearchParams()
    const {pages} = useSelector(state => state.episodes)

    return (
        <div>
            <Episodes/>
            <Pagination
                count={pages}
                defaultPage={+query.get('page')}
                variant="outlined"
                shape="rounded"
                onChange = {(e, page) => setQuery({page: page.toString()})}
                style={{display: "flex", justifyContent: "center", margin: "15px"}}
            />
        </div>
    );
};

export {EpisodesPage};
import { useEffect, useState } from 'react';
import Album from "./Album/Album";
import {GetAlbums} from "../../Services/ApiServices";

export const Albums = () => {
    const [ albums, setAlbums ] = useState([]);

    useEffect(() => {GetAlbums.getAlbums(setAlbums)},[]);

    return (
        <>
            <h2>Albums</h2>
            {albums.map((album) => {
                return (
                    <Album
                        key = {album.id}
                        album = {album}
                    />
                );
            })}
        </>);
};
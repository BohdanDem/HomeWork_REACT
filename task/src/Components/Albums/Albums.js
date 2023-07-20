import { useEffect, useState } from 'react';
import Album from "./Album/Album";

export const Albums = () => {
    const [ albums, setAlbums ] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then((response) => response.json())
            .then((albums) => {
                setAlbums(albums);
            })
    },[]);

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
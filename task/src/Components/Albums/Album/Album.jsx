import React from 'react';
import styles from './Album.module.css'

const Album = ({album}) => {
    const { userId, id, title } = album

    return (
        <div className={styles.album}>
            <div>userId: {userId}</div>
            <div>id: {id}</div>
            <div>title: {title}</div>
        </div>
    )
}

export default Album;
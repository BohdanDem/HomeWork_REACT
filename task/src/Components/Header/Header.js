import React from 'react';
import styles from './Header.module.css'
import {Box, LinearProgress} from "@mui/material";
import {useSelector} from "react-redux";

const Header = () => {
    const {isLoading} = useSelector(state => state.progress)
    return (
        <div>
            <div className={styles.header}>Rick & Morty</div>
            {
                isLoading && (
                    <Box sx={{ width: '100%', height: '5px' }}>
                        <LinearProgress />
                    </Box>
                )
            }
        </div>
    );
};

export default Header;
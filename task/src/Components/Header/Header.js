import React from 'react';
import styles from './Header.module.css'
import {Box, LinearProgress} from "@mui/material";

const Header = () => {
    return (
        <div>
            <div className={styles.header}>Rick & Morty</div>
            <div>
                <Box sx={{ width: '100%', height: '5px' }}>
                    <LinearProgress />
                </Box>
            </div>
        </div>
    );
};

export default Header;
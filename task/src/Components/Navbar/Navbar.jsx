import React from 'react';
import {AppRoutes} from "../../Routing/AppRoutes";
import { Link } from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {

    const buttons = [
        {
            label: 'TODOS',
            route: AppRoutes.TODOS
        },
        {
            label: 'ALBUMS',
            route: AppRoutes.ALBUMS
        },
        {
            label: 'COMMENTS',
            route: AppRoutes.COMMENTS
        },
    ]

    return (
        <div style={{
            width: '100%',
            height: 100,
            backgroundColor: 'lightcyan',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>

            {buttons.map((btn, index) =>
                <Link key={index} to={btn.route} className={styles.btn}>
                    {btn.label}
                </Link>
            )}
            
        </div>
    );
};

export default Navbar;
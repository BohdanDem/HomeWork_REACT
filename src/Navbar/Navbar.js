import React from 'react';
import {AppRoutes} from "../Routing/AppRoutes";
import {Link} from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {

    const buttons = [
        {
            label: 'POSTS',
            route: AppRoutes.POSTS
        },
        {
            label: 'COMMENTS',
            route: AppRoutes.COMMENTS
        },
        {
            label: 'CARS',
            route: AppRoutes.CARS
        }
    ]

    return (
        <div style={{
            width: '100%',
            height: 100,
            backgroundColor: 'darkblue',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly'
        }}>
            {buttons.map((btn, index) =>
                <Link key={index} to={btn.route} className={styles.button}>
                    {btn.label}
                </Link>
            )}
        </div>
    );
};

export default Navbar;
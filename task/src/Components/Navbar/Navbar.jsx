import React from 'react';
import styles from './Navbar.module.css'
import {AppRoutes} from "../../Routing/AppRoutes";
import {Link} from "react-router-dom";

const Navbar = () => {

    const buttons = [
        {
            label: 'CARS',
            route: AppRoutes.CARS
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
            backgroundColor: 'darkblue',
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
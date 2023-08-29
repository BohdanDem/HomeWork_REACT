import React from 'react';
import {AppRoutes} from "../Routing/AppRoutes";
import {NavLink} from "react-router-dom";
import styles from './Navbar.module.css'

const Navbar = () => {

    const buttons = [
        {
            label: 'TestUseMemo',
            route: AppRoutes.TEST_USE_MEMO
        },
        {
            label: 'useCallback',
            route: AppRoutes.USE_CALLBACK
        },
        {
            label: 'useToggle',
            route: AppRoutes.USE_TOGGLE
        },
        {
            label: 'useFetch',
            route: AppRoutes.USE_FETCH
        },
        {
            label: 'useArray',
            route: AppRoutes.USE_ARRAY
        },
        {
            label: 'useArrayUsers',
            route: AppRoutes.USE_ARRAY_USERS
        }
    ]

    return (
        <div className={styles.navbar}>
            {buttons.map((btn, index) =>
                <NavLink key={index} to={btn.route}>{btn.label}</NavLink>
            )}
        </div>
    );
};

export default Navbar;
import React from 'react';
import {useState, useEffect} from "react";
import LaunchComponent from "./Launch component/LaunchComponent";

const LaunchContainer = () => {
    const [launches, setLaunches] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then((response) => response.json())
            .then((launch)=> {
                const  filter = launch.filter(value => value.launch_year !== '2020')
                setLaunches(filter)
            })
    }, []);

    return (
        <div>
            {launches.map((launch) => {
                return (
                    <LaunchComponent key = {launch.launch_date_unix} launch = {launch}/>
                )
            })}
        </div>
    );
};

export default LaunchContainer;
import React from 'react';
import {useEffect, useState} from "react";
import Mission from "../spacexmission/Mission";
import axios from "axios";

const Missions = () => {

    let [missions, setMissions] = useState([]);
    console.log(missions)

    useEffect(() => {
        axios('https://api.spacexdata.com/v3/launches/').then(value => value.data).then(value => {
            const filtered = value.filter(item => item.launch_year !== "2020");
            setMissions(filtered)
        })

    }, []);

    return (
        <div>

            {

                missions.map(mission => <Mission mission={mission} key={mission.flight_number}/>)
            }
        </div>
    );
};

export default Missions;
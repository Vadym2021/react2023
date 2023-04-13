import React from 'react';
import {useEffect, useState} from "@types/react";
import Mission from "../spacexmission/Mission";

const Missions = () => {

    let [missions, setMissions] = useState([]);
    console.log(missions)
    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(allMissions => {
                setMissions(allMissions);

            });
    }, []);
    return (
        <div>

            {

                missions.map(mission => <Mission mission={mission} />)
            }
        </div>
    );
};

export default Missions;
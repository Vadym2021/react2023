import React from 'react';
import {useEffect, useState} from "@types/react";
import Post from "../post/Post";

const SpaceXMissions = () => {

    let [Missions, setMissions] = useState([]);

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches')
            .then(value => value.json())
            .then(allMissions => {
                setMissions(Missions);
                //console.log('log')
            });
    }, []);

    return (
        <div>
            Missions.map(misiion=> {mission.mission_name}/>)
        </div>
    );
};

export default SpaceXMissions;
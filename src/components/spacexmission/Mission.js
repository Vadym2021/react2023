import React from 'react';

const Mission = ({mission}) => {

    const{mission_name,launch_year,links:{mission_patch_small}} = mission

    return (
        <div>
            <div>{mission_name}</div>
            <div>{launch_year}</div>
            <div><img src={mission_patch_small} alt=""/></div>

        </div>
    );
};

export default Mission;
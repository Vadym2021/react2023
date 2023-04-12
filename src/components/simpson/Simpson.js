import React from 'react';

const Simpson = ({value}) => {
    return (
        <div>
            <div>{value.name} </div>
            <div>{value.surname}</div>
            <div>{value.age}</div>
            <div>{value.info}</div>
            <div><img src={value.photo} alt=""/></div>
        </div>
    );
};

export default Simpson;


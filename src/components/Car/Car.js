import React from 'react';

const Car = ({car, setCarForUpdate}) => {

    const {id, brand, price, year} = car;

    return (
        <div>
            <div>{id}</div>
            <div>{brand}</div>
            <div>{price}</div>
            <div>{year}</div>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
        </div>
    );
};

export default Car;
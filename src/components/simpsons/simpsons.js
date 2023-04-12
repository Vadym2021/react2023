import React from 'react';
import Simpson from "../simpson/Simpson";


function Simpsons({info: simpsons}) {
    // let simpsons = props.info
    //let {info} = props
    return (
        <div>
            {
                simpsons.map((value, index) => (<Simpson value={value} key={index}/>))
            }
        </div>
    );
};

export default Simpsons;

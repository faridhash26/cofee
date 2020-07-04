import React from 'react';
import Carousel from './Carousel';
import CountDown from './CountDown';

const Featured=()=>{
    return (
        <div style={{position:'relative'}}>
            <Carousel />

            <div className="artist_name">
                <div className="wrapper">Lordfarid</div>
            </div>
            <CountDown />
        </div>

    );
};

export default Featured;
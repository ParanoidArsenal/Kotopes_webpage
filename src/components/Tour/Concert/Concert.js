import React from 'react';
import './Concert.css';

const Concert = ({date, time, place}) =>{
    return (
        <div className = "concertContainer">
            <div className = "concertDate"><span>{date}</span></div>
            <div className = "concertTime"><span>{time}</span></div>
            <div className = "concertPlace"><span>{place}</span></div>
        </div>

    );
};


export {Concert};
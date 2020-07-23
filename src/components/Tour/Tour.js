import React from 'react';
import './Tour.css';
import {Concert} from './Concert/Concert';
import {SignUpForm} from "../SignUpForm/SignUpForm";

const Tour = () =>{
    return (
        <div className = "container containerTour">
            <div className = "containerInnerTourUpcoming">
                <h3>Upcoming Shows</h3>
                <p>Stay tuned for new tour dates coming in 2020!</p>
            </div>
            <div className = "containerInnerTour">
                <h3>Past Shows</h3>
                <Concert date='12.03.20' time = '19:30' place = "Москва/ Punk Fiction"></Concert>
                <Concert date='09.03.20' time = '19:00' place = "СПб/ Лес Villa"></Concert>
                <Concert date='03.03.20' time = '19:00' place = "Мурманск/ Плавучий Док"></Concert>
            </div>
            {/* <div className = "containerInnerTourForm text-white bg-primary"> */}
            <div className = "containerInnerTourForm">
                <p>Join mailing list for the latest news:</p>
                <SignUpForm placeholderText = "Enter email"></SignUpForm>
            </div>
            
        </div> 
    );
};

export {Tour};
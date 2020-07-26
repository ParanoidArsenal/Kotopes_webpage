import React from 'react';
import './Contact.css';
import {ContactForm} from '../ContactForm/ContactForm';

const Contact = () =>{
    return (
        <>
        <div className = "container containerContact">
        <p>
            <strong>Managment & booking - </strong> 
            <u className = "text-info">
                murmans1996@gmail.com
                {/* <a className = "text-info" href="mailto:murmans1996@gmail.com" target="_blank">murmans1996@gmail.com</a> */}
            </u>
        </p>
        <p>
            <strong>General - </strong> Please use the form below: 
        </p>
        <ContactForm />
        </div> 
        
        </>
    );
};

export {Contact};
import React from 'react';
import './ContactForm.css';

const ContactForm = () =>{
    return (
        <form className = "contactForm">
            <label for = 'Name'> Name</label>
            <input name= 'Name' placeholder='Name'></input>
            <label for = 'Emale'> E-male</label>
            <input name= 'Emale' placeholder='Emale'></input>
            <label for = 'Message'> Message</label>
            <input className = 'messageInput' name = 'Message' placeholder='Message'></input>
            <button type = 'submit' className = "btn btn-primary">Submit</button>
        </form>
    );
};

export {ContactForm};
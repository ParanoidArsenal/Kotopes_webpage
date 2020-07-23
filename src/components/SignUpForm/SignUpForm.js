import React from 'react';
import './SignUpForm.css';

const SignUpForm = ({placeholderText}) =>{
    return (
            <form className = "signUpForm">
                <input placeholder={placeholderText}></input>
                <button type = 'submit' className = "btn btn-primary">Sign Up</button>
            </form>
    );
};

export {SignUpForm};




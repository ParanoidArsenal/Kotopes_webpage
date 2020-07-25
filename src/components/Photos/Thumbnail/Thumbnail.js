import React,  { useState, useRef } from 'react';
import './Thumbnail.css';
import {MediumZoomImage} from '../../MediumZoomImage/MediumZoomImage';


const Thumbnail = ({src, alt}) =>{
        return (
        <MediumZoomImage src={src} alt={alt} className = "thumbnail" onOpen={() => console.log('Image Open')}
        onClosed={() => console.log('Image closed') }/>
    );
};


export {Thumbnail};
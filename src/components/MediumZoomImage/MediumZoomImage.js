import React, {useEffect, useRef, useState, Component} from 'react';
import mediumZoom from 'medium-zoom';

const MediumZoomImage = ( props ) =>{
    let zoom = null;
    let imgRef = useRef();
    useEffect(() => {
        zoom = mediumZoom(imgRef.current);
      }, []);

    return (
        <img
        ref={imgRef}
        {...props}
      />
    );
};

export  {MediumZoomImage};
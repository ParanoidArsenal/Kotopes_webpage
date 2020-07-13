import React from 'react';
import './Footer.css';
import icon_bandcamp from '../../pictures/icons/bandcamp-draw-logo.svg';
import icon_instagram from '../../pictures/icons/instagram-draw-logo.svg';
import icon_spotify from '../../pictures/icons/spotify-draw-logo-1.svg';
import icon_vk from '../../pictures/icons/vk-draw-logo.svg';
import icon_youtube from '../../pictures/icons/youtube-logo.svg';

const Footer = () =>{
    return (
        <div className = "containerFooter">
            <div className = "containerIcons">
                <img className = "containerIcon" alt="bandcamp link" srcSet={icon_bandcamp}/>
                <img className = "containerIcon" alt="bandcamp instagram" srcSet={icon_instagram}/>
                <img className = "containerIcon" alt="bandcamp spotify" srcSet={icon_spotify}/>
                <img className = "containerIcon" alt="bandcamp vk" srcSet={icon_vk}/>
                <img className = "containerIcon" alt="bandcamp youtube" srcSet={icon_youtube}/>
            </div>
        </div> 
    );
};

export {Footer};
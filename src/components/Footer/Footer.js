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
            <div className = "containerFooterIcons">
                <img className = "footerIcon" alt="bandcamp link" srcSet={icon_bandcamp}/>
                <img className = "footerIcon" alt="bandcamp instagram" srcSet={icon_instagram}/>
                <img className = "footerIcon" alt="bandcamp spotify" srcSet={icon_spotify}/>
                <img className = "footerIcon" alt="bandcamp vk" srcSet={icon_vk}/>
                <img className = "footerIcon" alt="bandcamp youtube" srcSet={icon_youtube}/>
            </div>
        </div> 
    );
};

export {Footer};
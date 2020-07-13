import React from 'react';
import './About.css';
// import icon_cat from '../../pictures/icons/iconfinder_cat-01_2140040.svg';
// import icon_dog from '../../pictures/icons/iconfinder_dog-01_2140043.svg';
import icon_cat from '../../pictures/icons/cat.svg';
import icon_dog from '../../pictures/icons/dog.svg';

const About = () =>{
    return (
        <div className = "containerAbout">
            <div className = "containerIcons">
                <img className = "containerIconStatic" alt="cat icon" srcSet={icon_cat}/>
                <img className = "containerIconStatic" alt="dog icon" srcSet={icon_dog}/>
                <img className = "containerIconStatic" alt="cat icon" srcSet={icon_cat}/>
                <img className = "containerIconStatic" alt="dog icon" srcSet={icon_dog}/>
                <img className = "containerIconStatic" alt="cat icon" srcSet={icon_cat}/>
                <img className = "containerIconStatic" alt="dog icon" srcSet={icon_dog}/>
            </div>
            <div className = "containerAboutOuterBodyText">
                <div className = "containerAboutInnerBodyText">
                <h3>About</h3>
                <p>I'm Oliver and I like things, most of all music!
                 This is my very minimal website where you can find a bunch of links.</p>

                   <p> I transcribe, share knowledge about, and cover music I love on youtube.</p>

                   <p> Check out some cool pictures in my galleries!</p>
                </div>
            </div>
        </div> 
    );
};

export {About};
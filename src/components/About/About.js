import React from 'react';
import './About.css';
// import icon_cat from '../../pictures/icons/iconfinder_cat-01_2140040.svg';
// import icon_dog from '../../pictures/icons/iconfinder_dog-01_2140043.svg';
import icon_cat from '../../pictures/icons/cat.svg';
import icon_dog from '../../pictures/icons/dog.svg';

const About = () =>{
    return (
        <div className = "container containerAbout">
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
                <p>Hello, we are band Kotopes from Saint-Petersburg, Russia! 
                    We play sort of emo/math/indie rock music.</p>

                   <p> On thiw webpage you can explore our music and other crappy content from us.</p>

                   <p> Hope you'll enjoy!</p>
                </div>
            </div>
        </div> 
    );
};

export {About};
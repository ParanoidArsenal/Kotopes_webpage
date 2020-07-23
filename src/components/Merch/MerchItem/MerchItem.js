import React from 'react';
import './MerchItem.css';
import {MediumZoomImage} from '../../MediumZoomImage/MediumZoomImage';
// import rough from 'roughjs';
import rough from 'roughjs/bundled/rough.esm';


// document.addEventListener('DOMContentLoaded', ()=>{readyfunc()});
// function readyfunc(){
//     console.log('!!!!!!!');
//     var c = document.createElement('canvas');
//     c.width = document.body.clientWidth;
//     console.log(c.width);
//     c.height = document.body.clientHeight;
//     console.log(document.body.clientHeight);
//     // ctx = c.getContext('2d'),
//     const rc = rough.canvas(c);
//     rc.rectangle(0, 0, c.width, c.height, { fill: 'red' });


// document.body.style.background = 'url(' + c.toDataURL() + ') no-repeat';
// document.body.style['background-size'] = 'cover';
// }


const MerchItem = ({photo, name, price}) =>{

    return (
        <div className = "merchItemCard ">
            <div className = "merchItemPhoto">
                <img src={photo}></img>
            </div>
            <span className = "merchItemName">{name}</span>
            <span className = "merchItemPrice">{price}</span>
        </div> 
    );
};

export {MerchItem};
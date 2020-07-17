import React from 'react';
import ReactMediumZoom from '../MediumZoomImage/MediumZoomImage';

import {MediumZoomImage} from '../MediumZoomImage/MediumZoomImage';

// const Merch = () =>{
//     return (
//         <div className = "containerMerch">
//         </div> 
//     );
// };


const Merch = () =>{
    return (
        <div className = "containerMerch">
            <MediumZoomImage 
            className = "thumbnail"
          src="https://w7.pngwing.com/pngs/275/932/png-transparent-super-mario-64-mario-bros-nintendo-64-super-mario-galaxy-super-mario-64-super-mario-bros-nintendo-video-game.png"
        />
        </div> 
    );
};

export {Merch};
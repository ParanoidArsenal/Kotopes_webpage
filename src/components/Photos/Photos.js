import React from 'react';
import './Photos.css';
import pic_1 from '../../pictures/photos/1_pic.jpg';
import pic_2 from '../../pictures/photos/2_pic.jpg';
import pic_3 from '../../pictures/photos/3_pic.jpg';
import pic_4 from '../../pictures/photos/4_pic.jpg';
import pic_5 from '../../pictures/photos/5_pic.jpg';
import pic_6 from '../../pictures/photos/6_pic.jpg';
import pic_7 from '../../pictures/photos/7_pic.jpg';
import pic_8 from '../../pictures/photos/8_pic.jpg';
import pic_9 from '../../pictures/photos/9_pic.jpg';
import {Thumbnail} from './Thumbnail/Thumbnail'; 

import './Thumbnail/Thumbnail.css';
const Photos = () =>{
    return (
        <div className = "container containerOuterPhotos">
            <div className = "containerInnerPhotos">
                <Thumbnail src={pic_1} alt="picture 1" />
                <Thumbnail src={pic_2} alt="picture 2" />
                <Thumbnail src={pic_3} alt="picture 3" />
                <Thumbnail src={pic_4} alt="picture 4" />
                <Thumbnail src={pic_5} alt="picture 5" />
                <Thumbnail src={pic_6} alt="picture 6" />
                <Thumbnail src={pic_7} alt="picture 7" />
                <Thumbnail src={pic_8} alt="picture 8" />
                <Thumbnail src={pic_9} alt="picture 9" />
            </div>
        </div> 
    );
};

export {Photos};
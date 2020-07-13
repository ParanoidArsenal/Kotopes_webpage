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


const Photos = () =>{
    return (
        <div className = "containerOuterPhotos">
            <div className = "containerInnerPhotos">
                <img className = "thumbnail" alt="picture 1" src={pic_1}/>
                <img className = "thumbnail" alt="picture 2" src={pic_2}/>
                <img className = "thumbnail" alt="picture 3" src={pic_3}/>
                <img className = "thumbnail" alt="picture 4" src={pic_4}/>
                <img className = "thumbnail" alt="picture 5" src={pic_5}/>
                <img className = "thumbnail" alt="picture 6" src={pic_6}/>
                <img className = "thumbnail" alt="picture 7" src={pic_7}/>
                <img className = "thumbnail" alt="picture 8" src={pic_8}/>
                <img className = "thumbnail" alt="picture 9" src={pic_9}/>
            </div>
        </div> 
    );
};

export {Photos};
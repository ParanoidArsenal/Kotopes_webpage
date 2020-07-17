import React,  { useState, useRef } from 'react';
import './Thumbnail.css';
// import ReactMediumImg from 'react-medium-zoom';
import {MediumZoomImage} from '../../MediumZoomImage/MediumZoomImage';



// const Thumbnail = ({src, alt}) =>{
//     const [modalMode, setModalMode] = useState(false);
//     if(!modalMode){
//         return (
//         <img className = "thumbnail" alt={alt} src={src} onClick={event => setModalMode(!modalMode)}/>
//     )}
//     else{
//         return (
//             <>
//             <div className = "modalWindow">
//                 <img className = "modalThumbnail" alt={alt} src={src} onClick={event => setModalMode(!modalMode)}/>
//             </div>
//             <img className = "thumbnail opacity-0" alt={alt} src={src}/>
//             </>
//         )
//     }
// };


// const Thumbnail = ({src, alt}) =>{
//     const [modalMode, setModalMode] = useState(false);

//     const wrapperRef = useRef(null);

//   const onButtonClick = () => {
//     const wrapper = wrapperRef.current;
//     wrapper.classList.toggle('zoom-hover');
//     console.log(wrapper.getBoundingClientRect());
//     const domCoord = wrapper.getBoundingClientRect();
//     const windowX = document.documentElement.clientWidth / 2;
//     console.log(windowX );
//     const windowY = document.documentElement.clientHeight / 2;
//     const width = wrapper.offsetWidth;
//     const height = wrapper.offsetHeight;
//     console.log(windowY);
//     console.log(windowY);
//     console.log(windowX-domCoord["left"]);
//     console.log(windowY-domCoord["top"]);

//     if(!modalMode){
//         wrapper.style =`background-color:blue; top:${domCoord["top"]}px;
//                         left:${domCoord["left"]}px;
//                         transform:translate(${windowX-domCoord["left"]-width}px, ${windowY-domCoord["top"]-height}px)`;
//     }
//     else{
//         wrapper.style ="";
//     }
//     wrapper.classList.toggle('to-center');

//     setModalMode(!modalMode);
//   };

//         return (
//         <>
//             <div className = "modalWindow hidden"></div>
//             <img className = "thumbnail zoom-hover" ref={wrapperRef} alt={alt} src={src} onClick={onButtonClick} />
//         </>
//         );

// };

const Thumbnail = ({src, alt}) =>{
        return (
        <MediumZoomImage src={src} alt={alt} className = "thumbnail" onOpen={() => console.log('Image Open')}
        onClosed={() => console.log('Image closed') }/>
        // {/* <img className = "thumbnail" alt={alt} src={src}/> */}
    );
};


export {Thumbnail};
import React, {useState, useEffect} from 'react';
import './Video.css';
// import spinner from '../../pictures/icons/loop.svg';


// const Video = () =>{
//     const [load, setLoad] = useState(false);
//     useEffect(() => setLoad(true), []);
//     if(load){
//     return (
//         <div className = "container containerOuterVideo">
//             <div className = "containerInnerVideo">
//                 {/* <div className = "container containerVideo"> */}
//                 <div className = "video">
//                 {/* width="560" height="315" */}
//                     <iframe className="iframeResponsive" src="https://www.youtube.com/embed/UCOjf47Ks3k"></iframe>
//                 </div>
//             </div> 
//         </div>
//     );
//     }
//     else{
//         return(
//             <div className="loader">
//                 <img src={spinner}/>
//             </div>
//             );
//     }
// };


const Video = () =>{
    return (
        <div className = "container containerOuterVideo">
            <div className = "containerInnerVideo">
                {/* <div className = "container containerVideo"> */}
                <div className = "video">
                {/* width="560" height="315" */}
                    <iframe className="iframeResponsive" src="https://www.youtube.com/embed/UCOjf47Ks3k"></iframe>
                </div>
            </div> 
        </div>
    );
};

export {Video};
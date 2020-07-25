import React,{useState, useEffect} from 'react';
import './Music.css';
import song_1 from '../../music/1_bamsee.wav';
import song_2 from '../../music/2_punchcakes.wav';
import song_3 from '../../music/3_homework.wav';
import song_4 from '../../music/4_luckyfive.wav';

const Music = () =>{
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setLoad(false);
    }, []);
    
    if(load){
        return (
            <div className = "container containerMusic">
                <iframe onLoad={() => setLoad(true)} style={{ border: 0, width: "350px", height: "588px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3247483279/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
                    <a href="http://kotopes.bandcamp.com/album/s-t">S/T by Kotopes</a>
                </iframe>
            </div> 
        );
    }
    else{
        return (
            <div className = "container containerMusic">
                <div className="iframeLoading">
                    <span>Loading...</span>
                </div>
                <iframe onLoad={() => setLoad(true)} style={{ display: 'none', border: 0, width: "350px", height: "588px"}} src="https://bandcamp.com/EmbeddedPlayer/album=3247483279/size=large/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless>
                <a href="http://kotopes.bandcamp.com/album/s-t">S/T by Kotopes</a>
                </iframe>
            </div> 
        );
    };

};

export {Music};
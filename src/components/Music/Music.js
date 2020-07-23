import React from 'react';
import song_1 from '../../music/1_bamsee.wav';
import song_2 from '../../music/2_punchcakes.wav';
import song_3 from '../../music/3_homework.wav';
import song_4 from '../../music/4_luckyfive.wav';

const Music = () =>{
    return (
        <div className = "container containerMusic">
            <audio controls>
                <source src={song_1} type="audio/mpeg"/>
            </audio>
            <audio controls>
                <source src={song_2} type="audio/mpeg"/>
            </audio>
            <audio controls>
                <source src={song_3} type="audio/mpeg"/>
                </audio>
            <audio controls>
                <source src={song_4} type="audio/mpeg"/>
            </audio>
        </div> 
    );
};

export {Music};
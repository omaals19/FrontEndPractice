import * as React from 'react';
import ReactPlayer from 'react-player';

import './Stream.css';
console.log("here");
function Stream() {
    return(
        <div className='stream'>
            <h1>Omar</h1>
            <ReactPlayer url='https://www.youtube.com/watch?v=HngtbIsM3VI&ab_channel=Gek%C3%A5sUllared'/>
        </div>
    )
}
export default Stream;
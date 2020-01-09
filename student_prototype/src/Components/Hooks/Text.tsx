import * as React from 'react';
import {useState} from 'react';

export default function Text() {
    const someText = "Riders on the storm Riders on the storm Into this house we're born Into this world we're thrown Like a dog without a bone An actor out on loan Riders on the storm";
    const shortText = someText.slice(0,20);
    const [showText, setShowText] = useState(false);

    function handleText(){
        setShowText(!showText);
    }

    return(
        <div >
            {showText? someText : shortText}
            <br />
            <button onClick={handleText}>
                {showText? 'Show text' : 'Show more'}
            </button>
        </div>
    );
}
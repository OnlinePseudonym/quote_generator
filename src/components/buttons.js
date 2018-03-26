import React from 'react';

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button onClick={props.generateQuote} className="new-quote btn">NEW QUOTE</button>
            <button className="share-tweet btn">TWEET</button>
        </div>
    )
}

export default Buttons;

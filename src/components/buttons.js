import React from 'react';

const Buttons = (props) => {
    return (
        <div className="buttons">
            <button id="new-quote" onClick={props.generateQuote} className="new-quote btn">NEW QUOTE</button>
            <a href={props.tweetUrl} id="tweet-quote" className="share-tweet btn" target='_blank'>TWEET</a>
        </div>
    )
}

export default Buttons;

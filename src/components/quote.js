import React from 'react';

const Quote = (props) => {
    return (
        <div className="quote">
            <figure>
                <span className="quotation-marks left">"</span>
                <p className="quote-content" dangerouslySetInnerHTML={{__html: props.quote}}></p>
                <span className="quotation-marks right">"</span>
                <figcaption className="quote-author" dangerouslySetInnerHTML={{__html: props.author}}></figcaption>
            </figure>
        </div>
    )
}

export default Quote;
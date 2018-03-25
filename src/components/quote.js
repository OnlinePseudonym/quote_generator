import React from 'react';

const Quote = () => {
    return (
        <div className="quote">
            <figure>
                <span className="quotation-marks left">"</span>
                <p className="quote-content">It's what you learn after you know it all that counts.</p>
                <span className="quotation-marks right">"</span>
                <figcaption className="quote-author"> - John Wooden</figcaption>
            </figure>
        </div>
    )
}

export default Quote;
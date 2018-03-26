import React, { Component } from 'react';
import Header from './header.js';
import Buttons from './buttons.js';
import Quote from './quote.js';

const END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            quote: "It's what you learn after you know it all that counts.",
            author: "- John Wooden",
        }
    }

    render() {
        return (
            <div className="root-container">
                <Header />
                <Buttons />
                <Quote quote={this.state.quote} author={this.state.author} />
            </div>
        )
    }
}

export default App;
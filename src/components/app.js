import React, { Component } from 'react';
import Header from './header.js';
import Buttons from './buttons.js';
import Quote from './quote.js';

const QUOTE_URL = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';
const TWEET_URL = 'https://twitter.com/intent/tweet?text=';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: "It's what you learn after you know it all that counts.",
            author: "- John Wooden",
        }

        this.generateQuote = this.generateQuote.bind(this);
    }
    
    generateQuote() {
        fetch(QUOTE_URL)
        .then(res => res.json())
        .then(resp => {
            this.setState({
                quote: resp[0].content,
                author: resp[0].title,
            })
        })
    };

    render() {
        const tweetUrl = `${TWEET_URL}${this.state.quote}${this.state.author}`;
        return (
            <div id="quote-box" className="root-container">
                <Header />
                <Buttons tweetUrl={tweetUrl} generateQuote={this.generateQuote} />
                <Quote quote={this.state.quote} author={this.state.author} />
            </div>
        )
    }
}

export default App;
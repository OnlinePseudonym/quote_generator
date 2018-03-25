import React, { Component } from 'react';
import Header from './header.js';
import Buttons from './buttons.js';
import Quote from './quote.js';

const END_POINT = 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1';

export default class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Header />
                <Buttons />
                <Quote />
            </div>
        )
    }
}

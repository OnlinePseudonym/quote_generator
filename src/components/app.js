import React from 'react';
import Header from './header.js';

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <body>
                <Header />
            </body>
        )
    }
}
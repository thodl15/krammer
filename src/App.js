import React, { Component } from 'react';
import NoteFeedPres from './components/NoteFeedPres';

import './stylesheets/App.css';


class App extends Component {
    render() {
        return (
            <div>
                <NoteFeedPres className={"mainFeed"}/>
            </div>
        )
    }
}

export default App;

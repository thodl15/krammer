import React, { Component } from 'react';
import NoteFeed from './components/NoteFeedCont';

import './stylesheets/App.css';



class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <div className={"visualWrapper"}>
                    <NoteFeed/>
                </div>
            </div>
        )
    }
}

export default App;

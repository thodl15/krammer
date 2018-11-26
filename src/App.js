import React, { Component } from 'react';
import NoteFeed from './components/NoteFeedCont';
import TestForm from './components/TestForm';

import './stylesheets/App.css';


class App extends Component {
    render() {
        return (
            <div id={"app"}>
                <NoteFeed className={"mainFeed"}/>
                {/* <TestForm/> */}
            </div>
        )
    }
}

export default App;

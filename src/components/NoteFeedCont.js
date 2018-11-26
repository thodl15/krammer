import React from 'react';

import PresComp from './NoteFeedPres';

class NoteFeedCont extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: []
        }
    }

    componentDidMount() {
        fetch("http://localhost:4000/notes").then(
            res => res.json()
        ).then(
            data => this.setState((state,props) => {
                return {
                    feed: data
                }
            })
        );
    }

    

    render() {
        return (
            <PresComp
                feed = { this.state.feed }
            />
        )
    }
}

export default NoteFeedCont;
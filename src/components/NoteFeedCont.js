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

    convertFeedToNodes(feed) {
        var output = [];
        feed.forEach(element => {
            output.push(
                <div
                    key = {feed.indexOf(element)}
                    className = { "feedItem" }
                >
                    {/* <div className = {"feedText"}>
                        {element.about}
                    </div> */}
                    {element.about}
                </div>
            )
        });
        console.log(feed);
        console.log(output);
        return output;
    }

    render() {
        return (
            <PresComp
                feed = { this.convertFeedToNodes(this.state.feed) }
            />
        )
    }
}

export default NoteFeedCont;
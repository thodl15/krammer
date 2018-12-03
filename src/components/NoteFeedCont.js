import React from 'react';

import PresComp from './NoteFeedPres';

class NoteFeedCont extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            feed: []
        }

        this.updateLocalFeedList = this.updateLocalFeedList.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:4000/notes").then(
            res => res.json()
        ).then(
            data => this.setState((state, props) => {
                return {
                    feed: data
                }
            })
        );
    }

    componentDidUpdate() {
        var feedList = document.getElementById("feedItemContainer");
        feedList.scrollTop = feedList.children[0].scrollTop;
    }

    convertFeedToNodes(feed) {
        var output = [];
        feed.forEach(element => {
            output.push(
                <div
                    key = { feed.indexOf(element) }

                    className = { "feedItem" }
                >
                    { element.about }
                </div>
            )
        });
        return output;
    }

    updateLocalFeedList(entry) {
        this.setState((state, props) => {
            state.feed.push(entry);
            return {
                feed: state.feed
            }
        });
    }

    render() {
        return (
            <PresComp
                feed = {this.convertFeedToNodes(this.state.feed)}
                updateFeed = {this.updateLocalFeedList}
            />
        )
    }
}

export default NoteFeedCont;
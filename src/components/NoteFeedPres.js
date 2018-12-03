import React from 'react';
import TestForm from './NoteInput';

import '../stylesheets/Feed.css';

const FeedExampleEventsProp = (props) =>
    <div className={"feedContainer"}>
        <TestForm
            updateFeed = { props.updateFeed }
        />
        <div
            id={"feedItemContainer"}
        >
            { props.feed }
        </div>
    </div>

export default FeedExampleEventsProp
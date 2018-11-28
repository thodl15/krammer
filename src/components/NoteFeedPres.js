import React from 'react';

import '../stylesheets/Feed.css';

// const events = [
//   {
//     date: '1 Hour Ago',
//     meta: '4 Likes',
//     summary: 'Elliot Fu added you as a friend',
//   },
//   {
//     date: '4 days ago',
//     meta: '1 Like',
//     summary: 'Helen Troy added 2 new illustrations',
//   },
//   {
//     date: '3 days ago',
//     meta: '8 Likes',
//     summary: 'Joe Henderson posted on his page',
//     extraText:
//       "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
//   },
//   {
//     date: '4 days ago',
//     meta: '41 Likes',
//     summary: 'Justen Kitsune added 2 new photos of you',
//     extraText: 'Look at these fun pics I found from a few years ago. Good times.',
//   },
// ]

// TODO (David):
// Determine how to manipulate the event data in order
// for it to pass as items to the Feed Component.
//
// No, the current way it is being done is not good.
// It is a janky building of an array at runtime,
// which most likely has a *much* better way of how
// to handle it.
//
// If possible, do some quick research as well as how
// to manipulate the individual components after they
// have been rendered to the screen, in order to add
// some features down the line, including in-line
// note editing.
const FeedExampleEventsProp = (props) => 
    // <Feed events={ props.feed.map(x => {
    //     return {
    //         date: 'Yesterday',
    //         meta: x.gender,
    //         summary: `${x.firstName} ${x.lastName !== "n/a" ? x.lastName : ''}`,
    //         extraText: x.area,
    //     }
    // })} 
    
    // />
    <div
        className = { "feedContainer" }
    >
        {props.feed}
    </div>
    // <List className={"mainFeed"}>
    //     <List.Item>Sample One</List.Item>
    //     <List.Item>Sample Two</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample One</List.Item>
    //     <List.Item>Sample Two</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample One</List.Item>
    //     <List.Item>Sample Two</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample One</List.Item>
    //     <List.Item>Sample Two</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample One</List.Item>
    //     <List.Item>Sample Two</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
    //     <List.Item>Sample Three</List.Item>
        
    // </List>

export default FeedExampleEventsProp
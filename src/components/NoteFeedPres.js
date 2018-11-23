import React from 'react'
import { Feed } from 'semantic-ui-react'

const events = [
  {
    date: '1 Hour Ago',
    meta: '4 Likes',
    summary: 'Elliot Fu added you as a friend',
  },
  {
    date: '4 days ago',
    meta: '1 Like',
    summary: 'Helen Troy added 2 new illustrations',
  },
  {
    date: '3 days ago',
    meta: '8 Likes',
    summary: 'Joe Henderson posted on his page',
    extraText:
      "Ours is a life of constant reruns. We're always circling back to where we'd we started.",
  },
  {
    date: '4 days ago',
    meta: '41 Likes',
    summary: 'Justen Kitsune added 2 new photos of you',
    extraText: 'Look at these fun pics I found from a few years ago. Good times.',
  },
]

const FeedExampleEventsProp = () => <Feed events={events} />

export default FeedExampleEventsProp
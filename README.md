# krammer
A lightweight note taking application written using React/Redux

# Goal
Make a simple note-taking application using React.js that allows tag inclusion via hashtags.

# Design
Based on some other designs that exist out in the wild, it will be a vertical display of all entries, sorted by time of creation.

Users can write a note using the textbox at the bottom and hit *enter* to submit the note (by default).

Users can include hashtags, which will be parsed and included alongside the raw text as a separate field in the db.

Users can then use a searchbar above the content window to search via hashtags in order to find specific notes.

The current plan is to use "Semantic UI" for this project, in order to gain some further experience with it. I've previously used it through the "Westworld Dashboard w/ React" project, however most of the styling and implementation had already been handled as part of the project template.

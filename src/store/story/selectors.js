import { createSelector } from 'reselect';

const storyIdsSelector = state => state.story.storyIds;
const storiesSelector = state => state.story.stories;
const searchTermSelector = state => state.story.searchTerm;

export const hasMoreStoriesSelector = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length,
);

export const filteredStoriesSelector = createSelector(
  storiesSelector,
  searchTermSelector,
  (stories, searchTerm) =>
    stories.filter(story => `${story.title}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0),
);

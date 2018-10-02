import { createSelector } from 'reselect';

const storyIdsSelector = state => state.story.storyIds;
const storiesSelector = state => state.story.stories;

export const hasMoreStoriesSelector = createSelector(
  storyIdsSelector,
  storiesSelector,
  (storyIds, stories) => storyIds.length > stories.length,
);

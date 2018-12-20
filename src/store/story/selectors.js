import { createSelector } from 'reselect';

const storyPageSelector = state => state.story.page;
const storyNbPagesSelector = state => state.story.nbPages;

export const hasMoreStoriesSelector = createSelector(
  storyPageSelector,
  storyNbPagesSelector,
  (page, nbPages) => page < nbPages,
);

import { connect } from 'react-redux';
import actions from 'store/story/actions';
import { hasMoreStoriesSelector, filteredStoriesSelector } from 'store/story/selectors';
import App from './App';

const mapStateToProps = state => ({
  layout: state.app.layout,
  searchTerm: state.story.searchTerm,
  theme: state.app.theme,
  stories: filteredStoriesSelector(state),
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStores: hasMoreStoriesSelector(state),
});

const mapDispatchToProps = dispatch => ({
  fetchStories: ({ storyIds, page }) => dispatch(actions.fetchStories({ storyIds, page })),
  fetchStoriesFirstPage: () => dispatch(actions.fetchStoryIds()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

import { connect } from 'react-redux';
import actions from 'store/story/actions';
import App from './App';

const mapStateToProps = state => ({
  layout: state.app.layout,
  theme: state.app.theme,
  stories: state.story.stories,
  page: state.story.page,
  storyIds: state.story.storyIds,
  isFetching: state.story.isFetching,
  hasMoreStores: true,
});

const mapDispatchToProps = dispatch => ({
  fetchStories: ({ page }) => dispatch(actions.fetchStories({ page })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

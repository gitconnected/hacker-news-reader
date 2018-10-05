import { connect } from 'react-redux';
import actions from 'store/story/actions';
import Search from './Search';

const mapStateToProps = state => ({
  searchTerm: state.story.searchTerm,
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: event => dispatch(actions.updateSearchTerm({ searchTerm: event.target.value })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);

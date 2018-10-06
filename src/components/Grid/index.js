import { connect } from 'react-redux';
import actions from 'store/story/actions';
import Grid from './Grid';

const mapStateToProps = state => ({
  searchTerm: state.story.searchTerm,
});

export default connect(mapStateToProps)(Grid);

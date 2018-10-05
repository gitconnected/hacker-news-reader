import { connect } from 'react-redux';
import actions from 'store/story/actions';
import List from './List';

const mapStateToProps = state => ({
  searchTerm: state.story.searchTerm,
});

export default connect(mapStateToProps)(List);

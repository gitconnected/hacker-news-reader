import { actionTypes } from './actions';

const getInitialState = () => ({
  stories: [],
  page: 0,
  isFetching: false,
  hasMoreStores: true,
  error: '',
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case `${actionTypes.FETCH_STORY_IDS}_REQUEST`:
    case `${actionTypes.FETCH_STORIES}_REQUEST`:
      return {
        ...state,
        isFetching: true,
      };
    case `${actionTypes.FETCH_STORY_IDS}_SUCCESS`:
      return {
        ...state,
        ...payload,
      };
    case `${actionTypes.FETCH_STORIES}_SUCCESS`:
      return {
        ...state,
        stories: [...state.stories, ...payload.stories],
        page: state.page + 1,
        isFetching: false,
      };
    case `${actionTypes.FETCH_STORIES}_FAILURE`:
      return {
        ...state,
        isFetching: false,
        hasMoreStores: false,
      };
    case actionTypes.REACHED_LAST_PAGE:
      return {
        ...state,
        hasMoreStores: false,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default story;

import { actionTypes } from './actions';

const getInitialState = () => ({
  storyIds: [],
  stories: [],
  page: 0,
  nbPages: 0,
  isFetching: false,
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
        page: payload.page,
        nbPages: payload.nbPages,
        isFetching: false,
      };
    default:
      return state;
  }
};

export default story;

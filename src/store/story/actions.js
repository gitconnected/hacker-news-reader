import api from 'services/gitconnectedApi';
import { buildRequestCreator, buildActionCreator } from 'store/utils';

const NS = '@hackerNewsReader/story';

export const actionTypes = {
  FETCH_STORIES: `${NS}/FETCH_STORIES`,
  REACHED_LAST_PAGE: `${NS}/REACHED_LAST_PAGE`,
};

const actions = {
  buildActionCreator: buildActionCreator(actionTypes.REACHED_LAST_PAGE),
  fetchStories: buildRequestCreator(actionTypes.FETCH_STORIES, ({ request, payload, dispatch }) => {
    dispatch(request.request(payload));
    return api
      .fetchStories(payload.page)
      .then(({ newsArticles }) => {
        if (newsArticles.length) {
          dispatch(request.success({ stories: newsArticles }));
        } else {
          dispatch(actions.reachedLastPage);
        }
      })
      .catch(err => dispatch(request.failure(err)));
  }),
};

export default actions;

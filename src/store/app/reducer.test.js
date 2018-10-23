import reducer from './reducer';
import { layouts, themes, AppReducerData } from './utils';
import { actionTypes } from './actions';

describe('app reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      theme: themes.dark,
      layout: layouts.list,
    });
  });

  it('should handle change', () => {
    expect(
      reducer(AppReducerData.initialState, {
        type: actionTypes.SET_THEME,
        payload: AppReducerData.payload,
      }),
    ).toEqual({
      theme: themes.light,
      layout: layouts.list,
    });
  });
});

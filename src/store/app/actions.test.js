import actions from './actions';
import { layouts, themes } from 'store/app/utils';

describe('actions', () => {
  it('should create an action to add change theme', () => {
    const payload = themes.light;
    const expectedAction = {
      type: '@hackerNewsReader/app/SET_THEME',
      payload,
    };
    expect(actions.setTheme(payload)).toEqual(expectedAction);
  });

  it('should create an action to add change layout', () => {
    const payload = layouts.grid;
    const expectedAction = {
      type: '@hackerNewsReader/app/SET_LAYOUT',
      payload,
    };
    expect(actions.setLayout(payload)).toEqual(expectedAction);
  });
});

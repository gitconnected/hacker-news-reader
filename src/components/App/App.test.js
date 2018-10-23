import React from 'react';
import { AppData } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import App from './App';
const { hasMoreStores, isFetching, layout, page, stories, storyIds, theme } = AppData;

describe('App Component', () => {
  let wrapper;
  const mockfetchStories = jest.fn();
  const mockfetchStoriesFirstPage = jest.fn();
  beforeEach(() => {
    mockfetchStoriesFirstPage.mockClear();
    // pass the mock function as the login prop
    wrapper = shallow(
      <App
        fetchStories={mockfetchStories}
        fetchStoriesFirstPage={mockfetchStoriesFirstPage}
        hasMoreStores={hasMoreStores}
        isFetching={isFetching}
        layout={layout}
        page={page}
        stories={stories}
        storyIds={storyIds}
        theme={theme}
      />,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should call the mock fetchSotriesFistPage function on Mount', () => {
    expect(mockfetchStoriesFirstPage.mock.calls.length).toBe(1);
  });
});

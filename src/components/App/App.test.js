import React from 'react';
import { AppData } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import App from './App';
const { hasMoreStores, isFetching, layout, page, stories, storyIds, theme } = AppData;

it('renders without crashing', () => {
  let wrapper;
  const mockfetchStories = jest.fn();
  const mockfetchStoriesFirstPage = jest.fn();
  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(
      <App
        fetchStories={mockfetchStories}
        mockfetchStoriesFirstPage={mockfetchStoriesFirstPage}
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

  expect(wrapper).toMatchSnapshot();
});

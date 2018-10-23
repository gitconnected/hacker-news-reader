import React from 'react';
import { NavData } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import Nav from './Nav';
const { layout, theme } = NavData;

describe('App Component', () => {
  let wrapper;
  const mocksetLayout = jest.fn();
  const mocksetTheme = jest.fn();
  beforeEach(() => {
    // pass the mock function as the login prop
    wrapper = shallow(
      <Nav setLayout={mocksetLayout} setTheme={mocksetTheme} layout={layout} theme={theme} />,
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });

  // Note: enzyme click events do not propagate...
  it('should call the mocksetLayout function on click', () => {
    wrapper
      .find('.fa-th-large')
      .parent()
      .simulate('click');
    expect(mocksetLayout.mock.calls.length).toBe(1);
  });

  it('should call the mocksetTheme function on click', () => {
    wrapper
      .find('.fa-sun')
      .parent()
      .simulate('click');
    expect(mocksetTheme.mock.calls.length).toBe(1);
  });
});

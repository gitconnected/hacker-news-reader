import React from 'react';
import { stories } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import Grid from './index';

it('renders without crashing', () => {
  const component = shallow(<Grid stories={stories} />);
  expect(component).toMatchSnapshot();
});

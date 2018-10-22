import React from 'react';
import { stories } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import List from './index';

it('renders without crashing', () => {
  const component = shallow(<List stories={stories} />);
  expect(component).toMatchSnapshot();
});

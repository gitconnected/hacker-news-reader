import React from 'react';
import { shallow } from 'enzyme';
import Loader from './index';

it('renders without crashing', () => {
  const component = shallow(<Loader />);
  expect(component).toMatchSnapshot();
});

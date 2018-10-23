import React from 'react';
import { gridItemData } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import GridItem from './index';
const { url, title, id } = gridItemData;

it('renders without crashing', () => {
  const component = shallow(<GridItem url={url} title={title} id={id} />);
  expect(component).toMatchSnapshot();
});

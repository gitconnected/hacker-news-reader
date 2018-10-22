import React from 'react';

import { shallow } from 'enzyme';
import ListItem from './index';

it('renders without crashing', () => {
  const component = shallow(
    <ListItem
      by="NN88"
      kids={[
        18277581,
        18277336,
        18277409,
        18277173,
        18277196,
        18277523,
        18277390,
        18277302,
        18277324,
        18277514,
        18277389,
      ]}
      score={58}
      url="http://nymag.com/intelligencer/2018/10/retailers-are-using-facial-recognition-technology-too.html"
      title="The Secretive Business of Facial-Recognition Software in Retail Stores"
      id={18276862}
      type="story"
      time={1540231727}
    />,
  );

  expect(component).toMatchSnapshot();
});

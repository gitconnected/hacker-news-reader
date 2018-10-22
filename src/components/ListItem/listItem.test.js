import React from 'react';
import { listItemData } from '../../../data-for-testing';
import { shallow } from 'enzyme';
import ListItem from './index';
const { by, kids, score, url, title, id, type, time } = listItemData;

it('renders without crashing', () => {
  const component = shallow(
    <ListItem
      by={by}
      kids={kids}
      score={score}
      url={url}
      title={title}
      id={id}
      type={type}
      time={time}
    />,
  );
});

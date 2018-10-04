import React, { Component } from 'react';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  render() {
    const { stories } = this.props;
    console.log(stories);
    return (
      <ListWrapper>
        {stories
          .filter(story => `${story.title}`.toUpperCase().indexOf('APPLE') >= 0)
          .map(story => (
            <ListItem key={story.id} {...story} />
          ))}
      </ListWrapper>
    );
  }
}

export default List;

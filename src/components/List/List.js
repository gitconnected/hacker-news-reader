import React, { Component } from 'react';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  render() {
    const { stories, searchTerm } = this.props;
    return (
      <ListWrapper>
        {stories
          .filter(story => `${story.title}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
          .map(story => (
            <ListItem key={story.id} {...story} />
          ))}
      </ListWrapper>
    );
  }
}

export default List;

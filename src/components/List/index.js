import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';

import { ListWrapper } from './styles';

class List extends Component {
  static propTypes = {
    stories: PropTypes.array.isRequired,
  };

  render() {
    const { stories } = this.props;
    return (
      <ListWrapper>
        {stories.map(story => (
          <ListItem key={story.id} {...story} />
        ))}
      </ListWrapper>
    );
  }
}

export default List;

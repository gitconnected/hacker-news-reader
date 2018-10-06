import React, { Component } from 'react';
import GridItem from 'components/GridItem';

import { GridWrapper } from './styles';

class Grid extends Component {
  render() {
    const { stories } = this.props;
    return (
      <GridWrapper>
        {stories.map(story => (
          <GridItem key={story.id} {...story} />
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;

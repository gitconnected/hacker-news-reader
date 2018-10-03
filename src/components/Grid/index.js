import React, { Component } from 'react';
import GridItem from 'components/GridItem';

import { GridWrapper } from './styles';

class Grid extends Component {
  render() {
    return (
      <GridWrapper>
        {this.props.stories.map(story => (
          <GridItem key={story.url} {...story} />
        ))}
      </GridWrapper>
    );
  }
}

export default Grid;

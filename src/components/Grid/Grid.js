import React, { Component } from 'react';
import GridItem from 'components/GridItem';

import { GridWrapper } from './styles';

class Grid extends Component {
  render() {
    const { searchTerm } = this.props;
    return (
      <GridWrapper>
        {this.props.stories
          .filter(story => `${story.title}`.toUpperCase().indexOf(searchTerm.toUpperCase()) >= 0)
          .map(story => (
            <GridItem key={story.id} {...story} />
          ))}
      </GridWrapper>
    );
  }
}

export default Grid;

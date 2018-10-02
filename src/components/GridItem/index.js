import React from 'react';

import { Item, Card, Image, Content, Title, Source } from './styles';

const GridItem = ({ url, title, site }) => (
  <a href={url} target="_blank" rel="nofollow noreferrer nofollow">
    <Item>
      <Card>
        <Image src="https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png" />
        <Content>
          <Title>{title}</Title>
          {/* <Source>{site}</Source> */}
          <Source>gitconnected.com</Source>
        </Content>
      </Card>
    </Item>
  </a>
);

export default GridItem;

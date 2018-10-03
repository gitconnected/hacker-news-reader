import React from 'react';
import getSiteHostname from 'utils/getSiteHostname';

import { Item, Card, Image, Content, Title, Source } from './styles';

const GridItem = ({ url, title }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';

  return (
    <a href={url} target="_blank" rel="nofollow noreferrer nofollow">
      <Item>
        <Card>
          <Image src="https://miro.medium.com/max/1176/1*F9RzuXseG1VrTjFJd403gw.png" />
          <Content>
            <Title>{title}</Title>
            <Source>// {site}</Source>
          </Content>
        </Card>
      </Item>
    </a>
  );
};

export default GridItem;

import React from 'react';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink from 'utils/getArticleLink';

import { Item, Card, Image, Content, Title, Source } from './styles';

const GridItem = ({ url, title, id }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });

  return (
    <a href={link} target="_blank" rel="nofollow noreferrer nofollow">
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

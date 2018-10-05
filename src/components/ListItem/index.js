import React from 'react';
import Timeago from 'timeago.js';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const timeago = Timeago();

const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, id });
  const commentUrl = `${HN_ITEM}${id}`;

  return (
    <Item>
      <ExernalLink href={link} rel="nofollow noreferrer noopener" target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExernalLink>
      <Description>
        {score} points by{' '}
        <CommentLink href={`${HN_USER}${by}`} rel="nofollow noreferrer noopener" target="_blank">
          {by}
        </CommentLink>{' '}
        {timeago.format(new Date(time * 1000).toISOString())} {' | '}
        <CommentLink href={commentUrl} rel="nofollow noreferrer noopener" target="_blank">
          {kids.length} Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;

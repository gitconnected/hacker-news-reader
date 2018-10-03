import React from 'react';
import Timeago from 'timeago.js';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const timeago = Timeago();

const HN_ROOT = 'https://news.ycombinator.com';
const HN_ITEM = `${HN_ROOT}/item?id=`;
const HN_USER = `${HN_ROOT}/user?id=`;

const ListItem = ({
  postedBy,
  commentCount,
  score,
  url,
  title,
  sourceId,
  type,
  site,
  postDate,
}) => {
  const commentUrl = `${HN_ITEM}${sourceId}`;
  const link = type === 'story' ? commentUrl : url;

  return (
    <Item>
      <ExernalLink href={link} rel="nofollow noreferrer noopener" target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExernalLink>
      <Description>
        {score} points by{' '}
        <CommentLink
          href={`${HN_USER}${postedBy}`}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {postedBy}
        </CommentLink>{' '}
        {timeago.format(new Date(postDate).toISOString())} {' | '}
        <CommentLink href={commentUrl} rel="nofollow noreferrer noopener" target="_blank">
          {commentCount} Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

export default ListItem;

import React from 'react';
import Timeago from 'timeago.js';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const timeago = Timeago();

const ListItem = ({ postedBy, commentCount, score, url, title, sourceId, site, postDate }) => {
  const link = getArticleLink({ url, id: sourceId });
  const commentUrl = `${HN_ITEM}${sourceId}`;

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

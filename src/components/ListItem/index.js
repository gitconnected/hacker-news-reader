import React from 'react';
import PropTypes from 'prop-types';
import Timeago from 'timeago.js';
import getSiteHostname from 'utils/getSiteHostname';
import getArticleLink, { HN_USER, HN_ITEM } from 'utils/getArticleLink';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const timeago = Timeago();

const ListItem = props => {
  const { author, num_comments, points, url, title, objectID, created_at } = props;
  const site = getSiteHostname(url) || 'news.ycombinator.com';
  const link = getArticleLink({ url, objectID });
  const commentUrl = `${HN_ITEM}${objectID}`;

  return (
    <Item>
      <ExernalLink href={link} rel="nofollow noreferrer noopener" target="_blank">
        <Title>
          {title} <Host>({site})</Host>
        </Title>
      </ExernalLink>

      <Description>
        {points} points by{' '}
        <CommentLink
          href={`${HN_USER}${author}`}
          rel="nofollow noreferrer noopener"
          target="_blank"
        >
          {author}
        </CommentLink>{' '}
        {timeago.format(new Date(created_at).toISOString())} {' | '}
        <CommentLink href={commentUrl} rel="nofollow noreferrer noopener" target="_blank">
          {num_comments} Comments
        </CommentLink>
      </Description>
    </Item>
  );
};

ListItem.propTypes = {
  author: PropTypes.string.isRequired,
  num_comments: PropTypes.number,
  points: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  objectID: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};

export default ListItem;

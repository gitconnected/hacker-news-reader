import React from 'react';
import PropTypes from 'prop-types';
import Timeago from 'timeago.js';
import getSiteHostname from 'utils/getSiteHostname';

import { Item, Title, Host, ExernalLink, Description, CommentLink } from './styles';

const timeago = Timeago();

const HN_ROOT = 'https://news.ycombinator.com';
const HN_ITEM = `${HN_ROOT}/item?id=`;
const HN_USER = `${HN_ROOT}/user?id=`;

const ListItem = ({ by, kids = [], score, url, title, id, type, time }) => {
  const commentUrl = `${HN_ITEM}${id}`;
  const link = type === 'story' ? commentUrl : url;
  const site = getSiteHostname(url) || 'news.ycombinator.com';

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

ListItem.propTypes = {
  by: PropTypes.string.isRequired,
  kids: PropTypes.array,
  score: PropTypes.number.isRequired,
  url: PropTypes.string,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired,
};

export default ListItem;

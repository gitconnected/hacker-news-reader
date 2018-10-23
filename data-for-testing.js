export const stories = [
  {
    by: 'magoghm',
    descendants: 41,
    id: 18277531,
    kids: [18277926, 18277900, 18278074, 18277699, 18277859, 18277835, 18277864],
    score: 79,
    time: 1540236259,
    title: 'AWS CEO Jassy follows Apple in calling for retraction of Chinese spy chip story',
    type: 'story',
    url:
      'https://www.cnbc.com/2018/10/22/aws-ceo-jassy-follows-apple-calls-for-spy-chip-story-retraction.html',
  },
  {
    by: 'NN88',
    descendants: 72,
    id: 18276862,
    kids: [
      18277851,
      18277773,
      18277336,
      18277638,
      18277523,
      18277196,
      18277173,
      18277302,
      18277409,
      18277700,
      18277870,
      18277390,
      18277646,
      18277581,
      18277721,
      18277324,
      18277689,
      18277514,
      18277389,
    ],
    score: 105,
    time: 1540231727,
    title: 'The Secretive Business of Facial-Recognition Software in Retail Stores',
    type: 'story',
    url:
      'http://nymag.com/intelligencer/2018/10/retailers-are-using-facial-recognition-technology-too.html',
  },
];

// we need time to be fixed relative to now (like 2 hours ago),
// we need the number of seconds since 1970.
// Note, because the props or the way the time is displayed always changes, we can't do snapshot on this component
var time = Date.now() * 1 - 1000 * 3600 * 3;
time = Math.round(time / 1000);

export const listItemData = {
  by: 'NN88',
  kids: [
    18277581,
    18277336,
    18277409,
    18277173,
    18277196,
    18277523,
    18277390,
    18277302,
    18277324,
    18277514,
    18277389,
  ],
  score: 58,
  url:
    'http://nymag.com/intelligencer/2018/10/retailers-are-using-facial-recognition-technology-too.html',
  title: 'The Secretive Business of Facial-Recognition Software in Retail Stores',
  id: 18276862,
  type: 'story',
  time: time,
};

export const gridItemData = {
  url:
    'http://nymag.com/intelligencer/2018/10/retailers-are-using-facial-recognition-technology-too.html',
  title: 'The Secretive Business of Facial-Recognition Software in Retail Stores',
  id: 18276862,
};

export const AppData = {
  hasMoreStores: false,
  isFetching: false,
  layout: 'list',
  page: 1,
  stories: stories,
  storyIds: [18277531, 18276862],
  theme: 'dark',
};

export const NavData = {
  layout: 'list',
  theme: 'dark',
};

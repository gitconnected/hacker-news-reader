import getArticleLink from './getArticleLink';

it('build article link', () => {
  expect(getArticleLink({ url: '', id: '18267468' })).toEqual(
    'https://news.ycombinator.com/item?id=18267468',
  );
  expect(
    getArticleLink({ url: 'https://avc.com/2018/10/who-are-my-investors/', id: '18267468' }),
  ).toEqual('https://avc.com/2018/10/who-are-my-investors/');
});

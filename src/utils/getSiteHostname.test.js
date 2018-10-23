import getSiteHostname from './getSiteHostname';

it('get hostname from the site url', () => {
  expect(getSiteHostname('')).toEqual('');
  expect(getSiteHostname('https://avc.com/2018/10/who-are-my-investors/')).toEqual('avc.com');
  expect(
    getSiteHostname(
      'https://www.theguardian.com/money/2018/oct/20/facebook-fake-amazon-review-factories-uncovered-which-investigation',
    ),
  ).toEqual('theguardian.com');
});

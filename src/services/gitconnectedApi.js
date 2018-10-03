import ApiService from './Api';

const BASE_URL = 'https://gitconnected.com';
const client = new ApiService({ baseURL: BASE_URL });

const api = {};

api.fetchStories = (page = 0) => client.get(`/v1/news/hackernews/top/${page}`);

export default api;

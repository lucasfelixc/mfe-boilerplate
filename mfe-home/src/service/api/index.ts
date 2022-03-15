import axios from 'axios';

import { env } from '~/environments';

export const CancelToken = axios.CancelToken;

export const api = axios.create({
  baseURL: env.url,
});

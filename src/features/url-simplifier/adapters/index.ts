// types
import { TPostLongLinkResponse } from 'api/url-simplifier/types';

export const shortUrlAdapter = (data: TPostLongLinkResponse) => {
  return data.short_url;
};

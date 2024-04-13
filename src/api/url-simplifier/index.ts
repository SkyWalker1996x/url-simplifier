// api
import urlSimplifierApi from 'api/url-simplifier/httpClient.ts';
// types
import { TUrlSimplifierApiClient } from 'api/url-simplifier/types';

const urlSimplifierApiClient: TUrlSimplifierApiClient = {
  postLongLink: (data) => urlSimplifierApi.post('', data)
};

export default urlSimplifierApiClient;

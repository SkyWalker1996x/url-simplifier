import { AxiosResponse } from 'axios';

type TPostLongLinkParams = {
  url: string
}

export type TPostLongLinkResponse = {
  short_url: string
}

export type TUrlSimplifierApiClient = {
  postLongLink: (payload: TPostLongLinkParams) => Promise<AxiosResponse<TPostLongLinkResponse>>
}

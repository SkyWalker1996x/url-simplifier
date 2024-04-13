import { useState, ChangeEvent } from 'react';
// api
import urlSimplifierApiClient from 'api/url-simplifier';
// hooks
import useFetch from 'hooks/useFetch.ts';
// helpers
import { shortUrlAdapter } from 'features/url-simplifier/adapters';

const useUrlSimplifier = () => {
  const [longUrl, setLongUrl] = useState('');
  const {
    data: shortUrl,
    handleRequest: postLongLink,
    isLoading,
    error,
  } = useFetch({
    request: urlSimplifierApiClient.postLongLink,
    initialValue: '',
    dataAdapter: shortUrlAdapter
  });

  const handleChangeLongUrl = (e: ChangeEvent<HTMLInputElement>) => {
    setLongUrl(e.target.value);
  };

  const updateShortUrl = () => {
    postLongLink({ url: longUrl });
  };

  return {
    longUrl,
    shortUrl,
    handleChangeLongUrl,
    updateShortUrl,
    isLoading,
    error
  };
};

export default useUrlSimplifier;

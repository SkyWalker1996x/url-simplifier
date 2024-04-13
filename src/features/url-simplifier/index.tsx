// hooks
import useUrlSimplifier from 'features/url-simplifier/hooks/useUrlSimplifier.ts';
// helpers
import { errorToMessage } from 'api/url-simplifier/helpers.ts';
// components
import Input from 'components/input';
import Button from 'components/button';
import CopyToClipboard from 'features/url-simplifier/components/copy-to-clipboard';
import Description from './components/description';
import Loader from 'components/loader';
import ErrorMessage from 'components/error-message';
// styles
import classes from 'features/url-simplifier/styles.module.css';

const UrlSimplifier = () => {
  const {
    shortUrl,
    longUrl,
    isLoading,
    error,
    handleChangeLongUrl,
    updateShortUrl
  } = useUrlSimplifier();

  return (
    <div className={classes.container}>
      <Description/>
      <div className={classes.rowContainer}>
        <Input type="text" value={longUrl} onChange={handleChangeLongUrl}/>
        <Button className={classes.button} onClick={updateShortUrl}>Simplify link</Button>
      </div>
      {isLoading && <Loader/>}
      {error && <ErrorMessage error={errorToMessage(error)}/>}
      {(!error && !isLoading) && <CopyToClipboard shortUrl={shortUrl}/>}
    </div>
  );
};

export default UrlSimplifier;

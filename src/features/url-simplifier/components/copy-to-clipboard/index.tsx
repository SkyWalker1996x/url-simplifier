// hooks
import useCopyToClipboard from 'hooks/useCopyToClipboard.ts';
// components
import Input from 'components/input';
import Button from 'components/button';
// styles
import cx from 'classnames';
import classes from 'features/url-simplifier/styles.module.css';

type Props = {
  shortUrl: string
}

const CopyToClipboard = ({ shortUrl }: Props) => {
  const { isCopied, handleCopyClick } = useCopyToClipboard({ copyText: shortUrl });

  return (
    <>
      {shortUrl && (
        <div className={classes.rowContainer}>
          <Input type="text" value={shortUrl} readOnly/>
          <Button
            className={cx(classes.button, { [classes.greenButton]: isCopied})}
            onClick={handleCopyClick}
            disabled={isCopied}
          >
            {isCopied ? 'Copied' : 'Copy'}
          </Button>
        </div>
      )}
    </>
  );
};

export default CopyToClipboard;

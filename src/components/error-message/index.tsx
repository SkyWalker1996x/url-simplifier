import classes from 'components/error-message/styles.module.css';

type Props = {
  error: string;
}

const ErrorMessage = ({ error }: Props) => {
  return <div className={classes.error}>{error}</div>;
};

export default ErrorMessage;

import { DetailedHTMLProps, ButtonHTMLAttributes, } from 'react';
// styles
import cx from 'classnames';
import classes from 'components/button/styles.module.css';

interface Props extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  className?: string;
}

const Button = ({ onClick, children, className }: Props) => {

  return <button className={cx(classes.button, className)} onClick={onClick}>{children}</button>;
};

export default Button;

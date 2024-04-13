import { DetailedHTMLProps, InputHTMLAttributes, ChangeEvent } from 'react';
import classes from 'components/input/styles.module.css';

interface Props extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  value: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, onChange }: Props) => {
  return <input className={classes.input} type="text" value={value} onChange={onChange}/>;
};

export default Input;

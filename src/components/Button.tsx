import React, { ButtonHTMLAttributes } from 'react';

import styles from '../styles/components/Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  theme?: string;
};

const Button: React.FC<ButtonProps> = ({children, style, ...rest}) => (
  <button type = "button" {...rest} className={`${styles.container}`}>
    {children}
  </button>
);

export default Button;
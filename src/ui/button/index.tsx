import React from 'react';

import './button.scss';

interface ButtonProps {
  className: 'primary';
  children: string;
  click?: () => void;
  type: 'button' | 'reset' | 'submit' | undefined;
}

export const Button = ({ className, children, click, type }: ButtonProps) => {
  return (
    <button type={type} onClick={click} className={className}>
      {children}
    </button>
  );
};

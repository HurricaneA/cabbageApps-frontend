import React, { HTMLAttributes, ReactNode } from 'react';

export interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary';
}

export const CustomBtn = ({
  children,
  variant = 'primary',
  ...props
}: Props) => {
  return (
    <button
      {...props}
      style={{
        backgroundColor: variant === 'primary' ? 'blue' : 'grey',
        color: 'white',
        border: 'none',
        borderRadius: 100,
        padding: 8,
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
};

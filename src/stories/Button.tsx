import React from 'react';
import './button.css';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;

  variant?:
    | 'primary'
    | 'danger'
    | 'success'
    | 'dark'
    | 'secondary'
    | 'warning'
    | 'outline-primary'
    | 'outline-danger';
  /**
   * What background color to use
   */
  backgroundColor?: string;

  textColor?: 'black' | 'white';
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  variant,
  size = 'medium',
  backgroundColor,
  textColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? 'storybook-button--primary'
    : `storybook-button--${variant}`;
  return (
    <button
      type='button'
      className={['storybook-button', `storybook-button--${size}`, mode].join(
        ' '
      )}
      style={{ backgroundColor, color: textColor }}
      {...props}
    >
      {label}
    </button>
  );
};

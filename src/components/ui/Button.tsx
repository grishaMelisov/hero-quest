import type { ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  variant?: 'outline' | 'filled';
  color?: 'primary' | 'secondary';
}

export default function Button({
  children,
  icon,
  iconPosition = 'left',
  fullWidth = false,
  variant = 'outline',
  color = 'primary',
  className = '',
  ...rest
}: ButtonProps) {
  const base =
    'text-btn flex items-center justify-center rounded-full gap-2 px-6 py-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer';

  const filledColors = {
    primary: 'bg-brand hover:bg-brand-hover text-text-primary',
    secondary: 'bg-text-primary hover:bg-text-secondary text-bg-page',
  };

  return (
    <button
      className={clsx(
        base,
        variant === 'outline' &&
          'border border-border text-text-primary hover:bg-bg-modal',
        variant === 'filled' && filledColors[color],
        fullWidth && 'w-full',
        className
      )}
      {...rest}
    >
      {icon && iconPosition === 'left' && <span className='shrink-0'>{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className='shrink-0'>{icon}</span>}
    </button>
  );
}

import { cn } from '@/utils/cn';
import { ComponentPropsWithoutRef } from 'react';

type ButtonVariants = 'default' | 'danger';

export type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: ButtonVariants;
};

const variants: Record<ButtonVariants, string> = {
  default: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400',
  danger: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-400',
};

export const Button = (props: ButtonProps) => {
  const {
    type = 'button',
    variant = 'default',
    className,
    children,
    ...rest
  } = props;

  return (
    <button
      {...rest}
      type={type}
      className={cn(
        'px-4 py-2 rounded-lg font-medium transition duration-200',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer',
        variants[variant],
        className
      )}
    >
      {children}
    </button>
  );
};

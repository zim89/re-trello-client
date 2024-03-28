import cn from 'clsx';
import { type InputHTMLAttributes, forwardRef } from 'react';

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>;

export const TransparentField = forwardRef<
  HTMLInputElement,
  TypeTransparentField
>(({ className, ...rest }, ref) => {
  return (
    <input
      className={cn(
        'w-full border-none bg-transparent focus:shadow-transparent focus:outline-0',
        className
      )}
      ref={ref}
      {...rest}
    />
  );
});

TransparentField.displayName = 'TransparentField';

import cn from 'clsx';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  children,
  className,
  ...rest
}: PropsWithChildren<TypeButton>) {
  return (
    <button
      className={cn(
        'linear border-primary hover:bg-primary active:bg-brand-700 rounded-lg border bg-transparent px-7 py-2 text-base font-medium text-white transition',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

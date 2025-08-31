import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'love' | 'ascii';
}

export function Button({ children, className, variant = 'default', ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        // Base styles - Candybox ASCII aesthetic
        'font-mono text-sm border transition-all duration-200',
        'bg-black border-green-400',
        'hover:bg-white hover:text-black',
        'active:bg-yellow-400 active:text-black',
        'focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-50',
        'disabled:opacity-50 disabled:cursor-not-allowed',
        
        // Variant styles
        {
          'px-4 py-2': variant === 'default',
          'px-3 py-1 heart-beat': variant === 'love',
          'px-2 py-1 border-dashed': variant === 'ascii',
        },
        
        className,
      )}
    >
      {variant === 'love' ? `♥ ${children} ♥` : variant === 'ascii' ? `[ ${children} ]` : children}
    </button>
  );
}
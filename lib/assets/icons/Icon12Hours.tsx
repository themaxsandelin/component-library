import { forwardRef, ForwardedRef } from 'react';

const Icon12Hours = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 11C19.7554 9.24022 18.9391 7.60966 17.6766 6.3595C16.4142 5.10933 14.7758 4.30892 13.0137 4.08155C11.2516 3.85419 9.46362 4.21248 7.9252 5.10125C6.38678 5.99001 5.18325 7.35994 4.5 9M4 5V9H8M4 13C4.468 16.6 7.384 19.546 11 20M18 15H20C20.2652 15 20.5196 15.1054 20.7071 15.2929C20.8946 15.4804 21 15.7348 21 16V17C21 17.2652 20.8946 17.5196 20.7071 17.7071C20.5196 17.8946 20.2652 18 20 18H19C18.7348 18 18.4804 18.1054 18.2929 18.2929C18.1054 18.4804 18 18.7348 18 19V20C18 20.2652 18.1054 20.5196 18.2929 20.7071C18.4804 20.8946 18.7348 21 19 21H21M15 21V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default Icon12Hours;

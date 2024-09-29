import { forwardRef, ForwardedRef } from 'react';

const Icon24Hours = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 13C4.325 15.532 5.881 17.781 8 19M20 11C19.7554 9.24022 18.9391 7.60966 17.6766 6.3595C16.4142 5.10933 14.7758 4.30892 13.0137 4.08155C11.2516 3.85419 9.46362 4.21248 7.9252 5.10125C6.38678 5.99001 5.18325 7.35994 4.5 9M4 5V9H8M12 15H14C14.2652 15 14.5196 15.1054 14.7071 15.2929C14.8946 15.4804 15 15.7348 15 16V17C15 17.2652 14.8946 17.5196 14.7071 17.7071C14.5196 17.8946 14.2652 18 14 18H13C12.7348 18 12.4804 18.1054 12.2929 18.2929C12.1054 18.4804 12 18.7348 12 19V20C12 20.2652 12.1054 20.5196 12.2929 20.7071C12.4804 20.8946 12.7348 21 13 21H15M18 15V17C18 17.2652 18.1054 17.5196 18.2929 17.7071C18.4804 17.8946 18.7348 18 19 18H20M21 15V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default Icon24Hours;

import { forwardRef, ForwardedRef } from 'react';

const IconAB2 = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 18H19C19.81 18 20.5 18.68 20.5 19.5L20.48 19.52C20.48 20.33 19.81 21 19 21H16V18ZM16 18H18.5C19.34 18 20 17.34 20 16.5C20 15.66 19.34 14.99 18.5 15H16V18ZM4 9V5C4 3.964 4.895 3 6 3C7.105 3 8 3.964 8 5V9M2.99 11.98C2.99 14.3669 3.93821 16.6561 5.62604 18.344C7.31387 20.0318 9.60305 20.98 11.99 20.98M20.99 11.98C20.99 9.59305 20.0418 7.30387 18.354 5.61604C16.6661 3.92821 14.3769 2.98 11.99 2.98M8 7H4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAB2;

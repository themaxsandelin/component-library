import { forwardRef, ForwardedRef } from 'react';

const IconAbacusOff = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 5V21M19 21V19M19 15V3M5 7H7M19 7H11V5M5 15H15M8 13V17M11 13V17M16 16V17M14 5V9M8 8V9M3 21H21L3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAbacusOff;

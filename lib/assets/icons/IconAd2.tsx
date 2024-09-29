import { forwardRef, ForwardedRef } from 'react';

const IconAd2 = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.933 5H5V21H18V13M14 17H9M15 5V3M18 6L20 4M19 9H21M9 13H14V9H9V13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAd2;

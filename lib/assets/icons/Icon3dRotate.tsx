import { forwardRef, ForwardedRef } from 'react';

const Icon3dRotate = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3C13.8565 3 15.637 3.7375 16.9497 5.05025C18.2625 6.36301 19 8.14348 19 10V14M19 14L16 11M19 14L22 11M3 12.5L8 15.5V21M3 12.5L8 9.5L13 12.5V18L8 21M3 12.5V18L8 21M8 15.545L13 12.515" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default Icon3dRotate;

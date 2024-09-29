import { forwardRef, ForwardedRef } from 'react';

const Icon3dCubeSphereOff = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 17.6L4 16.5V14M4 10V7.5M4 7.5L6 6.4M4 7.5L6 8.6M10 4.1L12 3L14 4.1M18 6.4L20 7.5M20 7.5V10M20 7.5L18 8.6M20 14V16M14 19.9L12 21M12 21L10 19.9M12 21V18.5M12 14.5V12L10 10.88M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default Icon3dCubeSphereOff;

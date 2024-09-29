import { forwardRef, ForwardedRef } from 'react';

const IconAdCircleOff = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4.91001 4.949C3.04352 6.82055 1.99679 9.35681 2.00001 12C2.00001 17.523 6.47701 22 12 22C14.6427 22.0032 17.1785 20.9569 19.05 19.091M20.778 16.793C21.5821 15.3236 22.0024 13.675 22 12C22 6.477 17.523 2 12 2C10.26 2 8.62401 2.444 7.20001 3.225M7.00001 15V10.5C6.99993 10.2474 7.06367 9.99881 7.1853 9.77738C7.30693 9.55595 7.48252 9.36883 7.69577 9.23338C7.90902 9.09793 8.15303 9.01853 8.40516 9.00256C8.65729 8.98658 8.90936 9.03455 9.13801 9.142M9.85401 9.853C9.94801 10.049 10 10.268 10 10.5V15M7.00001 13H10M14 14V15H15M17 13V11C17 10.4696 16.7893 9.96086 16.4142 9.58579C16.0391 9.21071 15.5304 9 15 9H14V10M3.00001 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAdCircleOff;

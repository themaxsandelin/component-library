import { forwardRef, ForwardedRef } from 'react';

const IconAccessPoint = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 12V12.01M14.828 9.172C15.5779 9.92211 15.9992 10.9393 15.9992 12C15.9992 13.0607 15.5779 14.0779 14.828 14.828M17.657 6.343C18.3999 7.08587 18.9892 7.96781 19.3913 8.93844C19.7934 9.90907 20.0003 10.9494 20.0003 12C20.0003 13.0506 19.7934 14.0909 19.3913 15.0616C18.9892 16.0322 18.3999 16.9141 17.657 17.657M9.168 14.828C8.41812 14.0779 7.99686 13.0607 7.99686 12C7.99686 10.9393 8.41812 9.92211 9.168 9.172M6.337 17.657C5.59409 16.9141 5.00478 16.0322 4.60272 15.0616C4.20065 14.0909 3.99371 13.0506 3.99371 12C3.99371 10.9494 4.20065 9.90907 4.60272 8.93844C5.00478 7.96781 5.59409 7.08587 6.337 6.343" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAccessPoint;

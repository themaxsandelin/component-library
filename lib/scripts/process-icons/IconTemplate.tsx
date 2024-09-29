import { forwardRef, ForwardedRef } from 'react';

const NAME = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      {'replace-me'}
    </svg>
  );
});

export default NAME;

import { forwardRef, ForwardedRef } from 'react';

const Icon2fa = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7 16H3L6.47 11.34C6.6831 11.1057 6.83752 10.8242 6.92057 10.5186C7.00361 10.213 7.01289 9.89207 6.94766 9.58218C6.88242 9.27229 6.74453 8.98232 6.54532 8.73613C6.34612 8.48995 6.09131 8.29458 5.80185 8.16612C5.51239 8.03766 5.19657 7.97977 4.88036 7.99722C4.56416 8.01466 4.25662 8.10695 3.98306 8.26648C3.70949 8.42601 3.47771 8.64822 3.30681 8.91482C3.1359 9.18143 3.03075 9.48481 3 9.8M10 16V8H14M10 12H13M17 16V10C17 9.46957 17.2107 8.96086 17.5858 8.58579C17.9609 8.21071 18.4696 8 19 8C19.5304 8 20.0391 8.21071 20.4142 8.58579C20.7893 8.96086 21 9.46957 21 10V16M17 13H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default Icon2fa;

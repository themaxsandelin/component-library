import { forwardRef, ForwardedRef } from 'react';

const IconAlarmOff = forwardRef(({ className = '' }: { className?: string }, ref: ForwardedRef<SVGSVGElement>) => {
  return (
    <svg className={className} ref={ref} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.587 7.56601C6.82709 8.1834 6.20516 8.95334 5.76137 9.82608C5.31758 10.6988 5.06182 11.655 5.01059 12.6327C4.95937 13.6105 5.11383 14.5881 5.464 15.5024C5.81416 16.4167 6.35224 17.2475 7.04348 17.9409C7.73471 18.6343 8.56372 19.175 9.47695 19.528C10.3902 19.8811 11.3673 20.0386 12.3452 19.9904C13.3231 19.9423 14.2801 19.6895 15.1542 19.2485C16.0283 18.8075 16.8002 18.188 17.42 17.43M18.77 14.785C19.0821 13.6028 19.0791 12.3594 18.7613 11.1787C18.4435 9.99798 17.822 8.9211 16.9586 8.05528C16.0952 7.18946 15.0201 6.5649 13.8403 6.24379C12.6604 5.92267 11.4171 5.91619 10.234 6.22501M12 12V13H13M5.261 5.26501L4.25 6.00001M17 4L19.75 6M3 3L21 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
    </svg>
  );
});

export default IconAlarmOff;

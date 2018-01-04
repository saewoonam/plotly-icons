import React from 'react';
const PlotBubblesIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M0 0h1.625v32h-1.625zM32 30.375v1.625h-32v-1.625zM9.625 19.188c0 0.875-0.75 1.625-1.625 1.625s-1.625-0.75-1.625-1.625c0-0.875 0.75-1.563 1.625-1.563s1.625 0.688 1.625 1.563zM30.375 4c0 1.313-1.063 2.375-2.375 2.375s-2.375-1.063-2.375-2.375c0-1.313 1.063-2.375 2.375-2.375s2.375 1.063 2.375 2.375zM28.813 11.188c0 1.75-1.438 3.188-3.188 3.188-1.813 0-3.25-1.438-3.25-3.188s1.438-3.188 3.25-3.188c1.75 0 3.188 1.438 3.188 3.188zM22.375 5.625c0 2.188-1.75 4-4 4-2.188 0-4-1.813-4-4 0-2.25 1.813-4 4-4 2.25 0 4 1.75 4 4zM20.75 16c0 2.625-2.188 4.813-4.813 4.813-2.688 0-4.813-2.188-4.813-4.813s2.125-4.813 4.813-4.813c2.625 0 4.813 2.188 4.813 4.813zM9.5 12.813c0 1.75-1.438 3.188-3.188 3.188s-3.188-1.438-3.188-3.188c0-1.75 1.438-3.188 3.188-3.188s3.188 1.438 3.188 3.188zM9.625 24.813c0 1.313-1.125 2.375-2.438 2.375s-2.375-1.063-2.375-2.375c0-1.313 1.063-2.438 2.375-2.438s2.438 1.125 2.438 2.438zM16 24c0 0.875-0.688 1.625-1.625 1.625-0.875 0-1.563-0.75-1.563-1.625s0.688-1.625 1.563-1.625c0.938 0 1.625 0.75 1.625 1.625zM27.188 18.375c0 1.375-1.063 2.438-2.375 2.438s-2.438-1.063-2.438-2.438c0-1.313 1.125-2.375 2.438-2.375s2.375 1.063 2.375 2.375zM20.813 23.188c0 0.438-0.375 0.813-0.813 0.813s-0.813-0.375-0.813-0.813c0-0.438 0.375-0.813 0.813-0.813s0.813 0.375 0.813 0.813zM12.813 7.188c0 0.438-0.375 0.813-0.813 0.813s-0.813-0.375-0.813-0.813c0-0.438 0.375-0.813 0.813-0.813s0.813 0.375 0.813 0.813z" />
    </svg>
  );
};
export default PlotBubblesIcon;

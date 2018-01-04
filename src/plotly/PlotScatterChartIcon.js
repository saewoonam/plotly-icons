import React from 'react';
const PlotScatterChartIcon = ({ className, children, ...props }) => {
  let classes = 'plotly-icon';
  if (className) classes += ` ${className}`;
  return (
    <svg {...props} width="32" height="32" viewBox="0 0 32 32" className={classes}>
      <path d="M32.375 7.625c-0.125 0-0.125 0.125-0.25 0 0-0.188 0-0.188 0-0.313-0.125 0-0.125 0-0.25 0 0-0.375-0.25-0.625-0.25-1.063-0.188 0-0.313 0-0.313-0.125-0.125 0.125-0.125 0.125-0.25 0.25-0.125 0 0-0.125-0.125-0.125-0.25 0.438-0.375 0.938-0.25 1.375-0.125 0.125-0.125 0.375-0.125 0.5-0.188 0-0.188 0-0.313 0 0 0.125 0 0.25-0.125 0.25-0.375 0.188-0.813 0.313-1.188 0.313-0.125 0-0.375 0-0.563 0.125-0.125 0.125-0.25 0.375-0.375 0.5s-0.25 0.125-0.25 0.313c0.125 0.125 0.125 0.25 0.125 0.375-0.438 0.688-1.063 0.375-1.625 0.688 0 0.125 0.125 0.25 0.125 0.375-0.5 0.688-1.188 1.063-1.813 1.5-0.188 0-0.438-0.188-0.563-0.313 0-0.25 0.25-0.5 0.375-0.625 0-0.438-0.125-0.813-0.375-1.063-0.125 0.125-0.25 0.25-0.375 0.375-0.188 0-0.188-0.125-0.188-0.25 0.438-0.125 0.188-0.813 0.313-0.938-0.125 0-0.125-0.125-0.125-0.125-0.438 0-0.688-0.438-0.938 0 0 0.125 0.125 0 0.125 0.125-0.125 0-0.125 0-0.25 0.125 0 0.25 0.125 0.375-0.188 0.375 0-0.125 0.188-0.25 0-0.375-0.25 0.375-0.375 0.938-0.375 1.438 0.375 0.438 0.25 1.063-0.125 1.5 0 0-0.125 0.125-0.125 0.125-0.813-0.688-0.313-2.125-0.125-2.938-0.188 0.25-0.313 0.375-0.563 0.563 0.25-0.563 0.375-0.938 0.563-1.25 0.25 0 0.625-0.125 0.938-0.25 0.25 0 0.5 0 0.75 0-0.125 0-0.25-0.125-0.125-0.375-0.125 0-0.25 0-0.375 0v-0.313c-0.438 0.188-0.938 0.313-1.375 0.313 0-0.313-0.25-0.313-0.5-0.313 0 0-0.125 0-0.125 0 0.125-0.25 0.125-0.375 0.375-0.5-0.25 0-0.5 0.125-0.625 0.375-0.313 0.125-0.563 0.313-0.813 0.438 0-0.125-0.313 0-0.313-0.125 0 0 0.188-0.188 0.188-0.313-0.313 0.125-0.438 0.125-0.688 0.125 0.25-0.25 0.375-0.375 0.688-0.625 0.25-0.125 0.5-0.313 0.625-0.438-0.25 0-0.5 0-0.625-0.125-0.188 0.125-0.438 0.125-0.563 0 0 0-0.125-0.125-0.125-0.125-0.25-0.125-0.563-0.125-0.938-0.125-0.125-0.125-0.25-0.125-0.563-0.125-0.125-0.125 0-0.563-0.25-0.563-0.125 0 0 0.313-0.125 0.313-4.813 0-9.625-0.563-14.25-1.875 0.125 0.625 0.125 0.938 0.125 1.188-0.125 0-0.25-0.125-0.125-0.25-0.125 0-0.125 0-0.25 0.125-0.313-0.125-0.563-0.313-0.813-0.438-0.125 0.438 0 0.813 0.125 1.25 0 0-0.125 0-0.125 0s0 0.125 0.125 0.125c-0.125 0.125-0.25 0.25 0 0.375-0.125 0-0.125 0.125-0.125 0.125-0.438 0.813-0.688 1.625-1.188 2.25 0 0.188 0 0.438-0.188 0.563 0 0.563-0.125 1.063-0.375 1.438 0.375 0.313 0 0.813 0.125 1.125 0.125 0.125 0.25 0.375 0.25 0.625 0 0.125 0 0.438 0.188 0.438-0.188 0.25 0 0.625 0.25 0.75 0 0.188-0.125 0.188-0.125 0.313 0 0.5 0.5 0.75 0.5 1.313 0 0.125 0 0.375 0 0.563 0.438 0.125 0.813 0.375 1.188 0.625 0 0.125 0 0.125 0 0.125 0.438 0.125 0.688 0.563 0.563 1.063 0.375 0.188 0.938 0.313 1.438 0.313 0 0.125-0.125 0-0.125 0.125 0.563 0.25 1.063 0.625 1.625 1.063 0.813 0.375 1.563 0.5 2.5 0.688 0-0.188 0-0.313 0.188-0.438 0.375 0.125 0.75 0.125 1.063 0.125 0.25 0.438 0.5 0.688 0.75 0.938 0.313 0.125 0.438 0.438 0.438 0.688 0.25 0.375 0.5 0.688 0.938 0.813 0.125-0.313 0.375-0.563 0.625-0.688 0.688 0 1.375 0.688 1.375 1.313 0.25 0.125 0.25 0.563 0.5 0.688-0.125 0.938 0.938 1.188 1.5 1.313-0.125-0.5-0.125-1.063 0-1.438 0.625-0.438 1.313-0.813 1.875-1.188 0.625-0.313 1.313-0.313 2-0.125 0-0.313-0.313 0-0.313-0.188 0.313-0.25 0.438 0.188 0.688 0.188 0 0 0 0.125 0 0.125 0.125 0.125 0.25 0.125 0.375 0.125 0.188-0.125 0.188-0.125 0.313-0.125 0.125 0.125-0.125 0.125 0 0.125 0.125-0.125 0.25-0.25 0.25-0.438 0 0.188 0.5 0.438 0.5 0.188-0.125 0-0.25-0.188-0.5-0.313 0.125 0 0.25-0.25 0.125-0.375-0.125 0.125-0.125 0.125-0.25 0.125 0.125-0.375 0.5-0.375 1.063-0.375 0 0 0-0.313 0.125-0.313s0.125 0.313 0 0.313c0.563-0.438 1.313-0.313 1.875 0.25 0.25 0 0.5-0.125 0.688-0.438 0.625 0 0.5 0.563 1.063 0.563 0.25 0.25 0 0.938 0.25 1.188 0-0.125 0-0.125 0-0.25 0 0 0.125 0 0.125 0 0 0.125-0.125 0.25-0.125 0.25 0.125 0.25 0.375 0.563 0.5 0.688 0 0 0.188-0.125 0.188-0.125 0.125 0.125 0.125 0.25 0.125 0.375 0.25 0 0.5 0.25 0.5 0.563 0.125-0.125 0.25-0.125 0.563-0.125 0 0.25-0.438 0.25-0.438 0.5 0.313-0.125 0.438-0.375 0.563-0.688-0.125 0 0 0.188-0.125 0.188 0.125-0.813-0.125-1.625-0.563-2.313 0 0 0.125 0 0.125-0.125-0.625-0.5-1.063-1.563-0.75-2.5 0.125-0.188 0.25-0.438 0.25-0.563 0.25-0.125 0.5-0.375 0.625-0.688 0-0.375 0.188-0.625 0.563-0.625 0 0 0.125 0 0.125 0 0-0.813 0.938-0.563 0.938-1.063-0.125 0.125-0.25 0.125-0.375 0 0.125 0.125 0.25-0.125 0.125-0.313 0.125 0.188 0.375 0 0.5-0.125 0 0 0 0 0-0.125-0.125 0-0.125 0-0.25 0 0.125 0 0.25 0 0.25-0.125-0.125-0.25-0.25-0.563-0.375-0.813-0.125 0-0.125 0-0.25 0 0.125-0.125-0.125-0.25-0.125-0.375 0 0 0 0 0.125 0 0-0.25-0.125-0.438-0.313-0.563 0.188 0 0-0.125 0.188-0.125-0.313-0.125-0.313-0.813 0-0.938-0.188 0.125 0.125 0.25-0.188 0.563 0.188 0 0 0 0.188 0.25 0.125 0.125 0.25 0.125 0.25 0.25 0-0.125 0-0.125 0-0.25 0.375 0.125 0 0.688 0.25 0.938 0.25-0.563 0.25-0.938 0.25-1.5-0.25-0.125-0.375-0.25-0.375-0.5 0.125 0.25 0.25 0.375 0.375 0.375 0 0 0 0.125 0 0.125 0.438-0.375 0.563-0.75 0.438-1.313 0 0-0.125 0-0.125 0 0.125 0 0-0.125 0.125-0.125v-0.125c0.375-0.438 0.938-0.688 1.438-0.938 0-0.125 0-0.125 0.125-0.25 0 0.125 0 0.125-0.125 0.25 0.125-0.125 0.25-0.25 0.563-0.25 0-0.125 0-0.313-0.313-0.313 0.188 0.188 0.188 0.188 0.188 0.313-0.313 0.25-0.438-0.438-0.688-0.313 0-0.375 0-0.75 0.125-1.188 0.25 0 0.375-0.125 0.563-0.25 0-0.125 0-0.25 0-0.375 0 0 0.125 0 0.125 0.125s-0.125 0-0.125 0.125c0.25-0.125 0.375-0.25 0.375-0.438 0 0.188 0 0.188 0.125 0.188s-0.125-0.188-0.125-0.313c0.25 0.125 0.813-0.375 0.375-0.625zM5.313 13.313h2.688v2.688h-2.688zM5.313 9.313h2.688v2.688h-2.688zM1.313 9.313h2.688v2.688h-2.688zM1.313 13.313h2.688v2.688h-2.688zM13.313 17.313h2.688v2.688h-2.688zM17.313 9.313h2.688v2.688h-2.688zM17.313 13.313h2.688v2.688h-2.688zM17.313 17.313h2.688v2.688h-2.688zM13.313 9.313h2.688v2.688h-2.688zM13.313 13.313h2.688v2.688h-2.688zM21.313 13.313h2.688v2.688h-2.688zM21.313 17.313h2.688v2.688h-2.688zM25.313 13.313h2.688v2.688h-2.688zM9.313 9.313h2.688v2.688h-2.688zM9.313 13.313h2.688v2.688h-2.688zM9.313 17.313h2.688v2.688h-2.688z" />
    </svg>
  );
};
export default PlotScatterChartIcon;

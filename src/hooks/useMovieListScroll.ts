import { useEffect, useState } from 'react';
const SCROLL_TOP_VALUE = 200;

const useMovieListScroll = (targetEl: HTMLElement) => {
  const [visibility, setVisibility] = useState({
    top: true,
    bottom: false,
  });
  useEffect(() => {
    if (typeof window === 'undefined' || !targetEl) return;

    const handleBoundsVisibility = () => {
      const bottom = targetEl.getBoundingClientRect().bottom;
      const top = targetEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const windowYPos = window.scrollY;
      setVisibility({
        top: top > 0 && windowYPos <= 0,
        bottom: windowHeight > bottom,
      });
    };

    // I heartily recommend to use some kind of throttling (lo-dash.throttle) here to reduce amount of callback executions
    document.addEventListener('scroll', handleBoundsVisibility);
    return () => {
      document.removeEventListener('scroll', handleBoundsVisibility);
    };
  }, [targetEl]);

  const onScrollUp = () => {
    if (visibility.top) return;
    const pos = window.scrollY;
    window.scrollTo({ top: pos - SCROLL_TOP_VALUE, behavior: 'smooth' });
  };

  const onScrollDown = () => {
    if (visibility.bottom) return;
    const pos = window.scrollY;
    window.scrollTo({ top: pos + SCROLL_TOP_VALUE, behavior: 'smooth' });
  };

  return {
    isBottomVisible: visibility.bottom,
    isTopVisible: visibility.top,
    onScrollUp,
    onScrollDown,
  };
};

export default useMovieListScroll;

import throttle from 'lodash.throttle';
import { useEffect, useState } from 'react';
const SCROLL_TOP_VALUE = 200;

const useMovieListScroll = (targetEl: HTMLElement) => {
  const [isTopVisible, setIsTopVisible] = useState(true);
  const [isBottomVisible, setIsBottomVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !targetEl) return;

    const onScroll = () => {
      const bottom = targetEl.getBoundingClientRect().bottom;
      const top = targetEl.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const windowYPos = window.scrollY;
      setIsTopVisible(top > 0 && windowYPos <= 0);
      setIsBottomVisible(windowHeight > bottom);
    };

    // Use a custom hook to throttle the scroll event
    const handleScroll = throttle(onScroll, 100);
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [targetEl]);

  const triggerScrollUp = () => {
    if (isTopVisible) return;
    window.scrollTo({
      top: window.scrollY - SCROLL_TOP_VALUE,
      behavior: 'smooth',
    });
  };

  const triggerScrollDown = () => {
    if (isBottomVisible) return;
    window.scrollTo({
      top: window.scrollY + SCROLL_TOP_VALUE,
      behavior: 'smooth',
    });
  };

  return {
    isBottomVisible,
    isTopVisible,
    triggerScrollUp,
    triggerScrollDown,
  };
};

export default useMovieListScroll;

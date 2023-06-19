import { RefObject, useEffect } from 'react';

const useIntersectionObserver = (
  targetRef: RefObject<Element>,
  callback: () => void,
  isRunningProcess?: boolean
) => {
  useEffect(() => {
    const node = targetRef.current;
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4,
    };
    const observer = new IntersectionObserver((entries, observer) => {
      const [entry] = entries;
      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        if (isRunningProcess) {
          observer.unobserve(entry.target);
          return;
        }
        callback();
        observer.observe(entry.target);
      }
    }, options);

    if (node) observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [callback, isRunningProcess, targetRef]);
};

export default useIntersectionObserver;

import { Router } from 'next/router';
import { useEffect, useState } from 'react';

const useClientLoading = () => {
  const [clientLoaded, setClientLoaded] = useState(false);
  const [isGsspLoading, setIsGsspLoading] = useState(false);
  useEffect(() => {
    // Component is mounted
    setClientLoaded(true);
  }, []);

  useEffect(() => {
    const start = () => {
      setIsGsspLoading(true);
    };
    const end = () => {
      setIsGsspLoading(false);
    };
    Router.events.on('routeChangeStart', start);
    Router.events.on('routeChangeComplete', end);
    Router.events.on('routeChangeError', end);
    return () => {
      Router.events.off('routeChangeStart', start);
      Router.events.off('routeChangeComplete', end);
      Router.events.off('routeChangeError', end);
    };
  }, []);

  return !clientLoaded || isGsspLoading;
};

export default useClientLoading;

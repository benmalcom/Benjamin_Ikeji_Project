import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect } from 'react';
import { PublicLayout } from 'components/layouts';
import useClientLoading from 'hooks/useClientLoading';
import theme from 'styles/theme';

const queryClient = new QueryClient();
queryClient.setDefaultOptions({
  queries: {
    cacheTime: 0,
    retry: false,
    refetchOnWindowFocus: false,
  },
});

NProgress.configure({ showSpinner: false });

type NextPageWithLayout = NextPage & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Layout?: React.FC<any>;
};

type AppPropsWithLayout = AppProps<Record<string, unknown>> & {
  Component: NextPageWithLayout;
};
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const loading = useClientLoading();
  const Layout = Component.Layout ?? PublicLayout;

  useEffect(() => {
    if (loading) NProgress.start();
    else NProgress.done();
  }, [loading]);

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;

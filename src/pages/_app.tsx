import { ChakraProvider } from '@chakra-ui/react';
import { configure } from 'axios-hooks';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import React, { useEffect } from 'react';
import { PublicLayout } from 'components/layouts';
import useClientLoading from 'hooks/useClientLoading';
import { instance } from 'services/http';
import theme from 'styles/theme';

configure({
  axios: instance,
  defaultOptions: {
    ssr: true,
    autoCancel: false,
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
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp;

import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Kumbh_Sans } from 'next/font/google';

import { Layout } from '@/components';

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <main className={kumbh.className}>
        <Component {...pageProps} />
      </main>
    </Layout>
  );
}

import '@/styles/globals.css'
import Head from 'next/head';
import NavBar from '../components/NavBar'
import Footer from '@/components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import { Encode_Sans } from 'next/font/google'
 
interface AppProps {
  Component: React.ComponentType<any>;
  pageProps: any;
}



const mart = Encode_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
})
 
// const roboto_mono = 
export default function App({ Component, pageProps }: AppProps) {
  


  const router = useRouter()

  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" key="desc"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={` ${mart.variable} font-mont  dark:bg-lds bg-light w-full min-h-screen`}>
        <NavBar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </div>
  )
}

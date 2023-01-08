import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import PageFooter from '../components/PageFooter'
import NextNProgress from 'nextjs-progressbar';


export default function App({ Component, pageProps }: AppProps) {
  return <div className=" py-4 px-4  md: md:px-12 w-screen min-h-screen">
    <NextNProgress color='#00FFF6'/>
    <Navbar/>
    <Component {...pageProps} />
    <PageFooter/>
  </div>
}

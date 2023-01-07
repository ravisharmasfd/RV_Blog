import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import PageFooter from '../components/PageFooter'



export default function App({ Component, pageProps }: AppProps) {
  return <div className=" py-4 px-4  md: md:px-12 w-screen min-h-screen">
    <Navbar/>
    <Component {...pageProps} />
    <PageFooter/>
  </div>
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import PageFooter from '../components/PageFooter'



export default function App({ Component, pageProps }: AppProps) {
  return <div className=" py-8 px-4 ">
    <Navbar/>
    <Component {...pageProps} />
    <PageFooter/>
  </div>
}

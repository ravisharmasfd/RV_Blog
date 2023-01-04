import Head from 'next/head'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>RV Blog</title>
        <meta name="description" content="A tech blog" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="#" />
      </Head>
      <main className='text-Slate/900' >
       new next js app
      </main>
    </>
  )
}

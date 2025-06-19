
import Head from 'next/head'
import LandingPage from '../components/LandingPage'

export default function Home() {
  return (
    <>
      <Head>
        <title>Cognistone</title>
        <meta name="description" content="Intelligence that Thinks Ahead" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LandingPage />
    </>
  )
}

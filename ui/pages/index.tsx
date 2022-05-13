import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { PrimaryBtn } from '../components/Button'
import { Header } from '../layout'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Anon Live | Home</title>
        <meta name="description" content="Anonymous web chat room" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <div className='px-20'>
          <h1>Instant Live chatrooms</h1>
          <h2>ive chat rooms for online conversations, free online chatting, video chat and chat rooms.</h2>
            <PrimaryBtn>Enter chat</PrimaryBtn>
      </div>
    </div>
  )
}

export default Home

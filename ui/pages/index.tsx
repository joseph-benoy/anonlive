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
        <div className='grid grid-cols-12 px-20'>
            <div className='col-span-6 -mt-5 gap-5  pr-20 flex flex-col justify-center'>
                <h1 className='text-6xl font-bold text-red-500 '>Instant Live chatrooms</h1>
                <h2 className='text-gray-600 text-xl'>Live chat rooms for online conversations, free online chatting, video chat and chat rooms.</h2>
                <div>
                    <PrimaryBtn>Enter chat</PrimaryBtn>
                </div>
            </div>
            <div className='col-span-6'>
                <Image src='/hero/hero1.jpg' width={500} height={500} alt="hero"/>
            </div>
        </div>
    </div>
  )
}

export default Home

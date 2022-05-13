import { Dialog, Transition } from '@headlessui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment, useCallback, useState } from 'react'
import { PrimaryBtn } from '../components/Button'
import { Header } from '../layout'
import { useForm, SubmitHandler } from "react-hook-form";
import axios from 'axios'
import qs from "qs";
import { useAppDispatch } from '../hooks/store'
import { update } from '../store/slices/room'

type Inputs = {
    roomName: string,
    userName: string,
};

const Home: NextPage = () => {
    const [isOpen,setOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const closeModal = useCallback(()=>{
        setOpen(false);
    },[isOpen]);
    const openModal = ()=>{
        setOpen(true);
    }
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async(data)=>{
        const res = await axios.post("/api/new",qs.stringify(data));
        dispatch(update(res.data));
    }
  return (
      <>
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
                    <PrimaryBtn onClick={openModal}>Create chat</PrimaryBtn>
                </div>
            </div>
            <div className='col-span-6'>
                <Image src='/hero/hero1.jpg' width={500} height={500} alt="hero"/>
            </div>
        </div>
    </div>
    <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Create chatroom
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mt-2">
                        <label className='text-gray-700'>Room name</label>
                        <input  {...register("roomName", { required: true })}  placeholder='Enter the room name' className='mb-3 hover:border-red-400 px-5 w-full outline-0 border border-gray-300 rounded py-2'/>
                        {errors.roomName && <><span className='-mt-3 text-red-400'>Room name is required</span><br /></>}
                        <label className='text-gray-700'>Username</label>
                        <input  {...register("userName", { required: true })}  placeholder='Enter the username' className='hover:border-red-400 px-5 w-full outline-0 border border-gray-300 rounded py-2'/>
                        {errors.userName && <span className='text-red-400'>Username is required</span>}
                  </div>
                  <div className="mt-4 flex gap-3">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                          Create chatroom
                      </button>
                
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      close
                    </button>
                  </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Home;

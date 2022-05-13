import Image from 'next/image';
import * as React from 'react';
import { PrimaryBtn } from '../components/Button';

export interface IHeaderProps {
}

export  function Header (props: IHeaderProps) {
  return (
        <header className='flex items-center justify-between pl-10 px-20'>
            <div className='flex items-center justify-center'>
                <Image src='/logo/logo.png' width={100} height={100} alt="logo"/>
                <h2 className='font-bold text-red-500 text-3xl -mt-5'>Anon Live</h2>
            </div>
            <div>
                <PrimaryBtn>Create chat</PrimaryBtn>
            </div>
        </header>
  );
}

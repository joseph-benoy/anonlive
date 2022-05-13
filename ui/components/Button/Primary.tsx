import * as React from 'react';

export interface IPrimaryBtnProps {
    children:React.ReactNode,
    onClick?:()=>void,
    classes?:string
}

export  function PrimaryBtn (props: IPrimaryBtnProps) {
  return (
    <button onClick={props.onClick} className='text-white bg-red-500 px-5 py-3 rounded shadow hover:bg-red-600 shadow-0 font-normal text-lg'>
        {props.children}
    </button>
  );
}

"use client";
import { signIn } from 'next-auth/react';
import React from 'react';
import Image from 'next/image';

const Login = () => {
  return (
    <div className="flex flex-col items-center mx-auto">
        <Image className="mt-6" src={'/fb-text.png'}  height={240} width={240}/>
        <a onClick={
          async() => await signIn('facebook')}
        className="px-20 py-4 z-10 text-2xl cursor-pointer mt-6 bg-blue-500 rounded-md text-white display: inline-block">
            Login
        </a>
    </div>
  )
}

export default Login

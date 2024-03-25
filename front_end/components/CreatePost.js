"use client" ;
import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React from 'react'

const CreatePost = () => {
    const {data : session} = useSession()
  return (
    <div className="bg-white rounded-md shadow-md text-gray-500 p-2">
        <div className="flex p-4 space-x-2 items-center"></div>
        <Image className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40}/>
        <form className="flex flex-1">

        </form>

      
    </div>
  )
}

export default CreatePost

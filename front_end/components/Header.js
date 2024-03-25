"use client" ;
import React from 'react';
import Image from 'next/image';
import { CiSearch } from "react-icons/ci";
import { SlHome } from "react-icons/sl";
import { GrFlag } from "react-icons/gr";
import { MdOutlineVideoLibrary, MdExpandMore } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import { BiJoystick } from "react-icons/bi";
import { IoMdMenu } from "react-icons/io";
import { LuMessagesSquare } from "react-icons/lu";
import { IoNotificationsOutline } from "react-icons/io5";
import { signOut, useSession } from 'next-auth/react';

const Header = () => {
    const {data : session} = useSession()
    
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>

        {/*Left Component */}

        <div className='flex min-w-fit '>
            <Image src={'/Facebook_Logo_Primary.png'} height={40} width={40}/>
            {/*Search Bar*/}
            <div className="flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 text-gray-500">
                <CiSearch size={20}/>
                <input className="hidden lg:inline-flex bg-transparent focus:outline-none" type="text" placeholder='Search'/>
            </div>
        </div>

        {/*Center Component */}
        <div className="flex flex-grow justify-center mx-2">
            <div className="flex items-center">
                {/* Home */}
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <SlHome className="mx-auto" size={25}/>
                </div>
                {/* Flag */}
                <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <GrFlag className="mx-auto" size={25}/>
                </div>

                 {/* Video */}
                 <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <MdOutlineVideoLibrary className="mx-auto" size={25}/>
                </div>

                 {/* Shop */}
                 <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <AiOutlineShop className="mx-auto" size={30}/>
                </div>

                 {/* Gaming */}
                 <div className="flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer">
                    <BiJoystick className="mx-auto" size={30}/>
                </div>
            </div>

        </div>

       { /*Right Component */}

       <div className="flex items-center justify-end min-w-fit space-x-2">
            <Image onClick = {signOut} className="rounded-full cursor-pointer" src={session?.user.image} height={40} width={40}/>
            <p className="hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs">{session?.user.name.split(" ")[0]}</p>  

            {/* Menu Grid */}
            <IoMdMenu size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer
            hover:bg-gray-300"/>

            {/* Messages */}
            <LuMessagesSquare size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer
            hover:bg-gray-300"/>

            {/* Notifications */}
            <IoNotificationsOutline size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer
            hover:bg-gray-300"/>

            {/* More Options*/}
            <MdExpandMore size={20} className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer
            hover:bg-gray-300"/>
        
       </div>
      
    </div>
  )
}

export default Header

"use client" ;
import React from 'react';
import Image from 'next/image';
import SidepanelItem from './SidepanelItem';
import { FaUsers } from "react-icons/fa";
import { MdGroups, MdExpandMore } from "react-icons/md";
import { FaShoppingBag , FaPhotoVideo} from "react-icons/fa";
import { RiMemoriesLine } from "react-icons/ri";
import { useSession } from 'next-auth/react';


const SidePanel = () => {
  const {data : session} = useSession()
  return (
    <div className="hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[320px]" >
        <div className="flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer">

        <Image src={session?.user.image} height={40} width={40} className="rounded-full cursor-pointer"/>
        <p className="hidden sm:inline-flex font-medium ">{session?.user.name}</p>
        </div>
        <SidepanelItem Icon={FaUsers} value="Friends"/>
        <SidepanelItem Icon={MdGroups} value="Groups"/>
        <SidepanelItem Icon={FaShoppingBag} value="Marketplace"/>
        <SidepanelItem Icon={FaPhotoVideo} value="Streaming"/>
        <SidepanelItem Icon={RiMemoriesLine} value="Memories"/>
        <SidepanelItem Icon={MdExpandMore} value="See More"/>

    </div>
  )
}

export default SidePanel

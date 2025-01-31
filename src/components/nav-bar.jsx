'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'

const NavBar = () => {
    const pathName = usePathname()

    let navContents = [{name:'chat',icon:'/chat.jpg',link:'/chat'}, {name:'updates',icon:'/updates.jpg',link:'/updates'}, {name:'communities',icon:'/communities.jpg',link:'/communities'}, {name:'calls',icon:'/calls.jpg',link:'/calls'}]
  return (
    <div className='p-4'>
        {
            <div className=' flex flex-col justify-center items-center space-y-10'>
                <Link href='/chat' className='w-[40] h-[40]'>
                    <Image 
                        src='https://static-00.iconduck.com/assets.00/whatsapp-icon-495x512-y1nyb5ge.png'
                        alt="App Logo"
                        width={100}
                        height={100}
                        className='cursor-pointer'
                    />
                </Link>
                {navContents.map((item) => {
                    return (
                        <div key={item.name} className={`w-[40] h-[40] p-1 text-black cursor-pointer flex justify-center items-center ${item.link === pathName ? 'border-4 rounded-lg' : null}`}>
                            <Link href={item.link}>
                                <Image src={item.icon} width={30} height={30} alt={item.name}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        }
    </div>
  )
}

export default NavBar
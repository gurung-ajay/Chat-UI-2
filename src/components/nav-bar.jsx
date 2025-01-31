import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavBar = () => {
    let navContents = [['chat','/chat.jpg'], ['updates','/updates.jpg'], ['communities','/communities.jpg'], ['calls','/calls.jpg']]
  return (
    <div className='p-4'>
        {
            <div className=' flex flex-col space-y-10'>
                <Link href='/whatsapp/chat'>
                    <Image 
                        src='https://static-00.iconduck.com/assets.00/whatsapp-icon-495x512-y1nyb5ge.png'
                        alt="WhatsApp Logo"
                        width={40}
                        height={40}
                        className='cursor-pointer'
                    />
                </Link>
                {navContents.map((item) => {
                    return (
                        <div key={item[0]} className='text-black cursor-pointer'>
                            <Link href={'/whatsapp/'+item[0]} className=''>
                                <Image src={item[1]} width={40} height={40} alt={item[0]}/>
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
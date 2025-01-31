import Image from 'next/image'
import React from 'react'
import chatData from '@/data/chatData.json'

const UserCard = ({userDetails}) => {
  const lastMessage = chatData.chats.find((chat) => 
    chat.participants.includes(userDetails.id)
  )?.lastMessage.content;

  return (
    userDetails.id !== 'u1' &&  // to exclude the currently logged in user assuming it's u1
    <div className='m-3 shadow-2xl p-4 flex gap-4 cursor-pointer hover:bg-slate-400'>
        
        <div className='flex'>
          <div className='w-12 h-12 rounded-full overflow-hidden'>
              <Image src={userDetails.avatar} alt={userDetails.name} width={50} height={50}/>
          </div>
        </div>
        
        <div className='flex flex-col'>
          <div className='font-bold'>{userDetails.name}</div>
          <div>{lastMessage ? (lastMessage.length > 20 ? `${lastMessage.slice(0, 20)}...` : lastMessage) : ''}</div>
        </div>
        
        
    </div>
  )
}

export default UserCard
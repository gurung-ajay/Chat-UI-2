import React from 'react'
import chatData from '../data/chatData'
import Image from 'next/image'
import { Input } from './ui/input';
import { Button } from './ui/button';

const ChatUi = ({selectedUser}) => {
  // Find the current user (assuming it's u1 for this example)
  const currentUser = chatData.users.find(user => user.id === 'u1');

  const messageDetails = chatData.chats.find((chat) => {
    return chat.participants.includes(selectedUser.id)
  })

  return (
    <div className='flex-1 flex flex-col p-4'>
      <div className='flex gap-4 items-center'>
        <div className='font-bold text-2xl'>
          {selectedUser.name}
        </div>
        <div className={`w-[10px] h-[10px] rounded-full ${selectedUser.status?.isOnline ? 'bg-green-400' : 'bg-gray-500'}`}></div>
      </div>
      <hr/>
      
      <div className='flex flex-col overflow-y-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] h-[60vh] p-4'>
          {messageDetails.messages.map((message) => {
            const isSelectedUserMessage = message.sender === selectedUser.id;
            return (
              <div key={message.id} className='w-full flex items-end gap-2'>
                {isSelectedUserMessage && (
                  <div className='w-8 h-8 rounded-full overflow-hidden flex-shrink-0'>
                    <Image src={selectedUser.avatar} alt={selectedUser.name} width={32} height={32} />
                  </div>
                )}
                <div className={`m-4 p-4 rounded-xl max-w-[60%] ${isSelectedUserMessage ? 'bg-[#73777F] self-start' : 'bg-[#3B3D42] text-white self-end ml-auto'}`}>
                  {message.content}
                </div>
                {!isSelectedUserMessage && currentUser && (
                  <div className='w-8 h-8 rounded-full overflow-hidden flex-shrink-0'>
                    <Image src={currentUser.avatar} alt={currentUser.name} width={32} height={32} />
                  </div>
                )}
              </div>
            )
          })}
      </div>
      <div>
        <form className='w-full flex gap-3'>
          <Input
            type="text"
            placeholder="Type a message"
            className='w-[65%]'
          />
          <Button type="submit" className='w-[30%]'>Send</Button>
        </form>
      </div>
    </div>
  ) 
}

export default ChatUi
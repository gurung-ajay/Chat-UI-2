'use client'
import ChatUi from '@/components/chat-ui'
import UserCard from '@/components/user-card'
import React, { useState } from 'react'
import chatData from '@/data/chatData.json'

const Chat = () => {
  const [selectedUser, setSelectedUser] = useState(chatData.users[1])

  function handleUserSelect(user) {
    setSelectedUser(user)
  }

  return (
    <div className='h-[80vh] overflow-hidden bg-slate-400 rounded-3xl'>
      <div className='flex h-full'>
        <div className='bg-slate-400  rounded-l-3xl w-[30%] p-4 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]'>
          {
            chatData.users.map((user) => {
              return chatData.chats.find((chat) => chat.participants.includes(user.id)) && // to make sure only those who have chats are shown
              <div key={user.id} onClick={() => handleUserSelect(user)}>
                  <UserCard userDetails={user}/>
                </div>
            })
          }
        </div>
        <div className='bg-slate-400 w-[70%] rounded-r-3xl'>
          {
            selectedUser && <ChatUi selectedUser={selectedUser}/>
          }
        </div>
      </div>
    </div>
  )
}

export default Chat
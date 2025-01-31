import NavBar from '@/components/nav-bar'
import React from 'react'

const layout = ({children}) => {
  return (
    <div className='flex items-center justify-center h-screen w-screen bg-black'>
      <div className='flex h-4/5 w-4/5 bg-white rounded-3xl'>
        <div className='w-[5%] h-full'>
          <NavBar />
        </div>
        
        <div className='w-[95%] h-full'>
          {children}
        </div>
        
      </div>
    </div>
  )
}

export default layout
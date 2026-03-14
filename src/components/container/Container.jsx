import React from 'react'

function Container({children, className}) {
  return <div className='min-h-screen flex flex-col bg-gray-50'>
    <div className={`w-[90%] mx-auto my-0 ${className}`}>{children}</div>
  </div> 
  
}

export default Container
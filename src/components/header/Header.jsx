import React from 'react'
import logo from '../../assets/celebrare-logo.webp'
function Header() {
  return (
   <header className="border-b-2 border-[#4E9358] py-4 flex justify-center items-center">
      <img src={logo} alt="Celebrare" 
      className="w-40 sm:w-48 md:w-56" />
    </header>
  )
}

export default Header
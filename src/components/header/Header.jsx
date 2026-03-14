import React from 'react'
import logo from '../../assets/celebrare-logo.webp'
function Header() {
  return (
   <header className="border-b-2 border-[#4E9358] py-4 flex justify-center items-center">
      <img src={logo} alt="Celebrare"  />
    </header>
  )
}

export default Header
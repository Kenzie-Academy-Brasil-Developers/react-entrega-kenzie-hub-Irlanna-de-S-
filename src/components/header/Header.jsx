import React from 'react'

const Header = ({children}) => {
  return (
   <header>
    <img src="./kenzieHub-Logo.png" alt="Logo KenzieHub" />
    <button>{children}</button>
   </header>
  )
}

export default Header

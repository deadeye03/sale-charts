import React from 'react'
import { ThemeSwitcher } from './theme-switcher'
import AuthButton from './header-auth'

function Navbar() {
  return (
    <div className='h-16 items-center fixed top-0 left-0 w-full px-12 bg-slate-200 flex justify-between dark:bg-[#41ad75] z-10'>
              <ThemeSwitcher />
              <AuthButton/>
    </div>
  )
}

export default Navbar

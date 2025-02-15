import React from 'react'
import { LocaleSwitcher } from '@/components/common'
import {HeaderAuth} from '@/components/header'
import { ThemeSwitch } from '@/components/theme'

const HeaderUserMenu = () => {
  return (
    <div className="hidden md:flex flex-row justify-between">
   

    <div className=" flex flex-row md:gap-2 lg:gap-4 ">
      <LocaleSwitcher />
      <ThemeSwitch />
      <HeaderAuth />
    </div>
  </div>
  )
}

export default HeaderUserMenu
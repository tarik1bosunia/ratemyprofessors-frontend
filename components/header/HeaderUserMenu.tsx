import React from 'react'
import { LocaleSwitcher } from '@/components/common'
import {HeaderAuth} from '@/components/header'

const HeaderUserMenu = () => {
  return (
    <div className="flex flex-row justify-between">
   

    <div className="flex flex-row gap-4 ">
      <LocaleSwitcher />
      <HeaderAuth />
    </div>
  </div>
  )
}

export default HeaderUserMenu
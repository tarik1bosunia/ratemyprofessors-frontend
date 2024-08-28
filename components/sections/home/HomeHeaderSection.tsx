'use client'
import {
  BG_HEADER_LINK,
} from '@/constants'

import { usePathname } from "next/navigation"


import {LocaleSwitcher, MyAccountDropdown, SocialLinksHeader} from "@/components/common"


import {useTranslations} from 'next-intl';
import { HeaderAuth } from '@/components/header'
import { ThemeSwitch } from '@/components/theme';


export default function HomeHeaderSection(){

  const t = useTranslations('Navigation')

  const pathname = usePathname()
  const isSelected = (path: string) => pathname === path ? true : false


    return (
        <div className="flex flex-col">
          <div className="bgimghome flex flex-col w-full top-0 static bg-no-repeat" style={{backgroundImage: `url(${BG_HEADER_LINK})`, backgroundPosition: 'max(100%, 63vw) max(-1200px, 108% + 40px)'}}>
            <div className="navbar flex flex-col  px-[33px] py-[39px] w-full max-w-[1280px] mx-auto my-0">
              <div className="flex flex-row justify-between">
                <SocialLinksHeader />

                <div className="flex flex-row gap-4 ">
                  <LocaleSwitcher />
                  <ThemeSwitch />
                  <HeaderAuth />
                </div>
              </div>
            </div>
           
          </div>
        </div>
    )
}
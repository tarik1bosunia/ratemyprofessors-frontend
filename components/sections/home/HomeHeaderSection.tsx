'use client'
import {
  LOGIN_GUEST_BUTTON_TEXT, SIGNUP_GUEST_BUTTON_TEXT,
  LOGIN_MODAL_NAME, CHECK_EMAIL_MODAL_NAME,
  AUTH_MENU_NAME,
  BG_HEADER_LINK,
} from '@/constants'

import { usePathname } from "next/navigation"
import { useAppSelector} from "@/redux/hooks"


import {MyAccountDropdown, SocialLinksHeader} from "@/components/common"
import { useModal } from "@/hooks"
import { useState } from "react"


export default function HomeHeaderSection(){

  const pathname = usePathname()
  const { isAuthenticated } = useAppSelector(state=> state.auth)


  const isSelected = (path: string) => pathname === path ? true : false

  const authLinks = (isMobile: boolean) => (
    <>
    <div className="relative">
    <button onClick={handleToggleDropdown}  type="button"   className="font-bold text-xl text-white bg-black rounded-full px-4 py-2"> {AUTH_MENU_NAME}</button>
    {
       
        isOpenMyAccountDropdown && <MyAccountDropdown />
    }
    </div>
       
    </>
  )


  const guestLinks = (isMobile: boolean) => (
    <>
    <button onClick={openLoginModal} type="button"  className="font-bold text-xl">{LOGIN_GUEST_BUTTON_TEXT} </button>
    <button onClick={openCheckemailModal}  type="button"   className="font-bold text-xl text-white bg-black rounded-full px-4 py-2">{SIGNUP_GUEST_BUTTON_TEXT}</button>
    </>
  )

  const {open: openCheckemailModal } = useModal(CHECK_EMAIL_MODAL_NAME);
  const {open: openLoginModal} = useModal(LOGIN_MODAL_NAME);

  const [isOpenMyAccountDropdown, setIsOpenMyAccountDropdown] = useState(false)

  const handleToggleDropdown = () =>{
    setIsOpenMyAccountDropdown(!isOpenMyAccountDropdown)
  }

    return (
        <div className="flex flex-col">
          <div className="bgimghome flex flex-col w-full top-0 static bg-no-repeat" style={{backgroundImage: `url(${BG_HEADER_LINK})`, backgroundPosition: 'max(100%, 63vw) max(-1200px, 108% + 40px)'}}>
            <div className="navbar flex flex-col  px-[33px] py-[39px] w-full max-w-[1280px] mx-auto my-0">
              <div className="flex flex-row justify-between">
                <SocialLinksHeader />

                <div className="flex flex-row gap-4 ">
                  { isAuthenticated ? authLinks(false) : guestLinks(false) }
                </div>
              </div>
            </div>
           
          </div>
        </div>
    )
}
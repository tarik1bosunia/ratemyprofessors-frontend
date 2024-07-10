'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

import { useAppSelector, useAppDispatch } from "@/redux/hooks"
import { logout as setLogout } from "@/redux/fetures/authSlice"
import { useLogoutMutation } from "@/redux/fetures/authApiSlice"
import { InstagramIconBlack, TikTalkIconBlack, XIconBlack } from "@/components/common/icons"

import {MyAccountDropdown} from "@/components/common"
import { useModal } from "@/hooks"
import { useState } from "react"



                /* <style>
                .bgimghome {
                    width: 100%;
                    top: 0;
                    background-image: url("{% static 'images/bg.svg' %}");
                    background-repeat: no-repeat;
                    background-position: max(100%, 63vw) max(-1200px, 108% + 40px);
                    position: static;
                }

            </style> */

export default function HomeHeaderSection(){

  const pathname = usePathname()
  const dispatch = useAppDispatch()
  const [logout] = useLogoutMutation()
  const { isAuthenticated } = useAppSelector(state=> state.auth)


  const handleLogout = () =>{
    logout(undefined)
    .unwrap()
    .then(()=> {
        dispatch(setLogout())
    })
  }

  const isSelected = (path: string) => pathname === path ? true : false

  const authLinks = (isMobile: boolean) => (
    <>
    <div className="relative">
    <button onClick={handleToggleDropdown}  type="button"   className="font-bold text-xl text-white bg-black rounded-full px-4 py-2"> MyAccount</button>
    {
       
        isOpenMyAccountDropdown && <MyAccountDropdown />
    }
    </div>
       
  
      {/* <NavLink 
        isSelected={isSelected('dashboard')}
        isMobile={isMobile}
        href="/dashboard">
        Dashboard
      </NavLink>

      <NavLink 
        onClick= {handleLogout}
        isMobile={isMobile}
        >
        Logout
      </NavLink> */}
    </>
  )

  const guestLinks = (isMobile: boolean) => (
    <>
    <button onClick={openLoginModal} type="button"  className="font-bold text-xl">Log In</button>
    <button onClick={openCheckemailModal}  type="button"   className="font-bold text-xl text-white bg-black rounded-full px-4 py-2">Sign Up</button>
    {/* <NavLink 
      isSelected={isSelected('/auth/login')}
      isMobile={isMobile}
      href="/auth/login">
      Log In 
    </NavLink>
    <NavLink 
      isSelected={isSelected('/auth/registration')}
      isMobile={isMobile}
      href="/auth/registration">
      SignUp 
    </NavLink> */}
    </>
  )
  const {open: openCheckemailModal } = useModal('checkemailModal');
  const {open: openLoginModal} = useModal('loginModal');

  const [isOpenMyAccountDropdown, setIsOpenMyAccountDropdown] = useState(false)

  const handleToggleDropdown = () =>{
    setIsOpenMyAccountDropdown(!isOpenMyAccountDropdown)
  }

    return (
        <div className="flex flex-col">
           

        <div className="bgimghome flex flex-col w-full top-0 static bg-no-repeat" style={{backgroundImage: 'url(/images/bg.svg)', backgroundPosition: 'max(100%, 63vw) max(-1200px, 108% + 40px)'}}>
          <div className="navbar flex flex-col  px-[33px] py-[39px] w-full max-w-[1280px] mx-auto my-0">
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-5">
                <Link className="" href="https://www.instagram.com/ratemyprofessors/"
                  >
                  <InstagramIconBlack />  
                </Link>
                <Link href="https://x.com/ratemyprofessor"
                  >
                    <TikTalkIconBlack />
                </Link>
                <Link href="https://tiktok.com/@ratemyprofessors"
                  >
                    <XIconBlack />
                </Link>
              </div>

              <div className="flex flex-row gap-4 ">
                { isAuthenticated ? authLinks(false) : guestLinks(false) }
              </div>
            </div>
          </div>
          <div className="advertisementarea p-32"></div>
        </div>
      </div>
    )
}
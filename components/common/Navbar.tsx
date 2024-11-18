'use client'
import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderSearch from "../header/HeaderSearch";
import HeaderUserMenu from "../header/HeaderUserMenu";

import logo from '@/public/logo/rateteach-logo/vector/default-monochrome.svg'
import { useModal } from "@/hooks";
import { NAVIGATION_SMALL_SCREEN_MODAL_NAME } from "@/constants";
import { useState } from "react";




export default function Navbar(){
  const {open: openNSSModal} = useModal(NAVIGATION_SMALL_SCREEN_MODAL_NAME)
  const [isSearchInSmallScreen, setIsSearchInSmallScreen] = useState<boolean>(false)

  return (
    <>
    <header className="transition-all duration-200 ease-in top-0 left-0 fixed shadow-[0px_4px_12px_rgba(37,38,94,.06)] w-screen z-20 bg-white dark:bg-black">
      <nav className="flex w-full items-center h-12">
        <div className="flex-1 relative w-full xl:max-w-[1172px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] mx-auto px-2 md:px-4">
          
          <div className="flex justify-between md:items-center relative">

            {
              isSearchInSmallScreen ? "":
            
            (
              // hamberger for small screen 
              <>
            <div className="flex justify-center items-center md:hidden ">
              <button onClick={openNSSModal} className=" border-0  m-2 outline-none">
                <RxHamburgerMenu className="w-8 h-8" />
              </button>
            </div>

            {/* brand logo  */}
            <div
              title="rmp"
              className="hover:bg-gray-100 hover:rounded-full hover:px-2 hover:py-1 transition-all duration-200 ease-in opacity-100 m-0 md:mr-4 md:my-1"
            >
              <a href="/" className="">
                <Image
                  className=""
                  src={logo}
                  width={250}
                  // height={40}
                  alt="rt"
                  priority
                />
              </a>

            </div>
           

            {/* search icon for small screen */ }
            <button onClick={()=> {setIsSearchInSmallScreen(true)}} className='border-0 outline-none block md:hidden '>
              <IoIosSearch className='w-8 h-8' />
            </button>

            </>
            )

            }

            {/* search */}
            <HeaderSearch isSearchSmallScreen={isSearchInSmallScreen}/>

            <HeaderUserMenu />    

            {
              isSearchInSmallScreen && (
                <button onClick={()=> {setIsSearchInSmallScreen(false)}}>cancel</button>
              )
            }        

          </div>


        </div>
      </nav>
      
    </header>
    <div className="py-5"></div>
    </>
    // <div className="bg-white sticky top-0 w-full z-[250000]">
    //   <div className="flex flex-col">
    //     <header role="banner" className="flex items-center bg-black text-white mx-auto px-3 py-6 w-full">
    //       {/* toast contaner */}
    //       <div className="my-0 mx-auto max-w-[1280px] w-full flex flex-row items-center box-border justify-between">
    //         <HeaderLogo />
    //         <HeaderSearch/>
    //         <HeaderUserMenu />
    //       </div>
    //     </header>
    //   </div>
    // </div>
  )

}
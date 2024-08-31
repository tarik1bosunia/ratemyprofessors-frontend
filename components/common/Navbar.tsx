import Image from "next/image";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import HeaderSearch from "../header/HeaderSearch";
import HeaderUserMenu from "../header/HeaderUserMenu";




export default function Navbar(){

  return (
    <>
    <header className="transition-all duration-200 ease-in top-0 left-0 fixed shadow-[0px_4px_12px_rgba(37,38,94,.06)] w-screen">
      <nav className="flex w-full items-center h-12">
        <div className="flex-1 relative w-full xl:max-w-[1172px] lg:max-w-[960px] md:max-w-[720px] sm:max-w-[540px] mx-auto md:px-4">
          
          <div className="flex justify-between md:items-center relative">
            {/* hamberger for small screen */}
            <div className="block md:hidden ">
              <button className=" border-0 flex-none m-2 outline-none">
                <RxHamburgerMenu className="w-8 h-8" />
              </button>
            </div>
            {/* brand logo */}
            <div
              title="rmp"
              className="transition-all duration-200 ease-in opacity-100 mr-4 my-1"
            >
              <a href="/" className="w-[84px] h-auto ">
                <Image
                  className=""
                  src="//cdn.programiz.com/sites/tutorial2program/files/pc_logo.svg"
                  width={84}
                  height={28}
                  alt="rmp"
                />
              </a>
            </div>
            {/* search icon for small screen */}
            <button className='border-0 outline-none block md:hidden '>
              <IoIosSearch className='w-8 h-8' />
            </button>
            {/* search */}
            <HeaderSearch />
            <HeaderUserMenu />            

          </div>


        </div>
      </nav>
      
    </header>
    <div className="py-20"></div>
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
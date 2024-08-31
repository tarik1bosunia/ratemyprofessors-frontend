import SmallRMPLogoWhite from '@/public/logo/small_rmp_logo_white.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import Image from 'next/image'
const HeaderLogo = () => {
  return (
    <div className="flex items-center justify-between w-full md:w-fit">
      <div className="block md:hidden ">
        <button className=" border-0 flex-none m-2 outline-none">
        <RxHamburgerMenu className='w-8 h-8'/>
        </button>
      </div>
      <a href="/">
      <Image src={SmallRMPLogoWhite} alt="rmp logo" /></a>
      <button className='border-0 outline-none block md:hidden '>
        <IoIosSearch className='w-8 h-8' />
      </button>
    </div>
  )
}


export default HeaderLogo
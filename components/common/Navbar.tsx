import HeaderLogo from "../header/HeaderLogo";
import HeaderSearch from "../header/HeaderSearch";
import HeaderUserMenu from "../header/HeaderUserMenu";


export default function Navbar(){

  return (
    <div className="bg-white sticky top-0 w-full z-[250000]">
      <div className="flex flex-col">
        <header role="banner" className="flex items-center bg-black text-white mx-auto px-3 py-6 w-full">
          {/* toast contaner */}
          <div className="my-0 mx-auto max-w-[1280px] w-full flex flex-row items-center box-border justify-between">
            <HeaderLogo />
            <HeaderSearch  />
            <HeaderUserMenu />
          </div>
        </header>
      </div>
    </div>
  )

}
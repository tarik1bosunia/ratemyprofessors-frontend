{/* <style>
.social_icons_footer{
    box-sizing: content-box;
    height: 18px;
    padding-left: 20px;
    width: 18px;
}
.footer_logo_bg_a{
    place-content: center;
    background-repeat: no-repeat;
    background-size: contain;
    display: flex;
    flex-direction: row;
    -webkit-box-pack: center;
    margin-bottom: 0px;
    padding-right: 16px;
    z-index: 300001;
}
</style> */}

import Link from "next/link"
import { SmallRMPLogoWhite } from "./logo"
import InstagramIconWhite from '@/public/icons/white/InstagramIconWhite.svg'
import XIconWhite from '@/public/icons/white/XIconWhite.svg'
import TikTalkIconWhite from '@/public/icons/white/TikTalkIconWhite.svg'
import Image from "next/image"

export default function Footer(){
    return (
        <div className="flex flex-col text-white bg-black p-4">
            <div className="flex flex-row flex-wrap justify-center h-full" style={{'WebkitBoxPack': 'center'}}>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="https://help.ratemyprofessors.com/">Help</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/guidelines">Site Guidelines</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/terms-of-use">Terms &amp; Conditions</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/privacy">Privacy Policy</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/copyright">Copyright Compliance Policy</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/privacy#sectionp10">CA Notice at Collection</a>
                </div>
                <div className="flex flex-row justify-start mr-4">
                    <a className="leading-4 mb-4 font-bold no-underline" href="/ccpa">CA Do Not Sell or Share My Personal
                        Information</a>
                </div>
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center mb-4 relative" style={{'WebkitBoxPack': 'center'}}>
                  
                  <Link href="https://www.instagram.com/ratemyprofessors/" className="" >
                    <Image src={InstagramIconWhite} alt="instagram icon" />
                  </Link>
        
                    <Link href="https://x.com/ratemyprofessor" className="" >
                        <Image src={XIconWhite} alt="x icon white"/>
                    </Link>

                    <Link href="https://tiktok.com/@ratemyprofessors" className="" >
                      
                        <Image src={TikTalkIconWhite} alt="tiktalk icon white"/>
                    </Link>

                </div>
                <div className="flex flex-row justify-center" style={{'WebkitBoxPack': 'center'}}>
                    <Link className="footer_logo_bg_a" href="/">
                     <SmallRMPLogoWhite  /> {/* className="w-[46px] h-[26px]" */}
                    </Link>
                    <div className="FooterCopyright__StyledCopyright-sc-1g3eanm-0 dAqQLO">
                        <div className="FooterCopyright__CopyrightText-sc-1g3eanm-1 ivZzTO">
                        &nbsp; &copy; &nbsp;2024 Rate My Professors, LLC. All Rights Reserved</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
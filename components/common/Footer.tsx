import Link from "next/link"
import SmallRMPLogoWhite  from "@/public/logo/small_rmp_logo_white.svg"
import styles from '@/components/common/footer.module.css'
import Image from "next/image"
import { FOOTER_COPYRIGHT_TEXT, FOOTER_LINKS, FOOTER_SOCIAL_LINKS } from "@/constants"

export default function Footer(){
    return (
        <div className="flex flex-col text-white bg-black p-4">
            <div className="flex flex-row flex-wrap justify-center h-full">
                {
                    FOOTER_LINKS.map((footer_link, index)=> (
                        <div key={index} className="flex flex-row justify-start mr-4">
                            <Link className="leading-4 mb-4 font-bold no-underline" href={footer_link.link}>{footer_link.title}</Link>
                        </div>
                    ))
                }
            </div>
            <div className="flex flex-col">
                <div className="flex justify-center mb-4 relative">
                  {
                    FOOTER_SOCIAL_LINKS.map((footer_link, index)=> (
                        <Link key={index} href={footer_link.link} className="" >
                        <Image className={styles.social_icons_footer} src={footer_link.icon} alt={footer_link.alt} />
                      </Link>
                    ))
                  }

                </div>
                <div className="flex flex-row justify-center" style={{'WebkitBoxPack': 'center'}}>
                    <Link className={styles.footer_logo_bg_a} href="/">
                        <Image className="w-[46px] h-[26px]" src={SmallRMPLogoWhite} alt="small rmp logo white" />
                    </Link>
                    <div className="">
                        <div className="">
                         {FOOTER_COPYRIGHT_TEXT}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
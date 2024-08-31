import { INSTARAM_SOCIAL_LINK, TIKTALK_SOCIAL_LINK, X_SOCIAL_LINK } from "@/constants";
import { PiTiktokLogo } from "react-icons/pi";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";

import Link from "next/link";

export default function SocialLinksHeader(){
    return (
        <div className="flex flex-row gap-5">
        <Link  href={INSTARAM_SOCIAL_LINK}
        className="flex justify-center items-center text-2xl"
        title="instagram"
          >
          <FaInstagram className="custom-text-color"/>  
        </Link>
        <Link href={TIKTALK_SOCIAL_LINK}
        className="flex justify-center items-center text-2xl"
        title="tiktalk"
          >
            <PiTiktokLogo className="custom-text-color"/>
        </Link>
        <Link href={X_SOCIAL_LINK}
        className="flex justify-center items-center text-2xl"
        title="x"
          >
            <RiTwitterXLine className="custom-text-color"/>
        </Link>
      </div>

    )
}
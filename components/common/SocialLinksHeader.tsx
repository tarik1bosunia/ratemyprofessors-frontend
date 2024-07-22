import { INSTARAM_SOCIAL_LINK, TIKTALK_SOCIAL_LINK, X_SOCIAL_LINK } from "@/constants";
import { InstagramIconBlack, TikTalkIconBlack, XIconBlack } from "@/components/common/icons";
import Link from "next/link";

export default function SocialLinksHeader(){
    return (
        <div className="flex flex-row gap-5">
        <Link className="" href={INSTARAM_SOCIAL_LINK}
          >
          <InstagramIconBlack />  
        </Link>
        <Link href={TIKTALK_SOCIAL_LINK}
          >
            <TikTalkIconBlack />
        </Link>
        <Link href={X_SOCIAL_LINK}
          >
            <XIconBlack />
        </Link>
      </div>

    )
}
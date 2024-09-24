import { AddDetailsModalForm} from "@/components/forms";
import HeaderUserMenu from "@/components/header/HeaderUserMenu";
import { NAVIGATION_SMALL_SCREEN_MODAL_NAME } from "@/constants";
import { useModal } from "@/hooks";
import { LocaleSwitcher } from "../common";
import { ThemeSwitch } from "../theme";
import { HeaderAuth } from "../header";

export default function NavigationForSmallScreenModalContent() {
    const {close: closeNSSModal} = useModal(NAVIGATION_SMALL_SCREEN_MODAL_NAME)
    const handleSkipforNow = () => {
        closeNSSModal()
    }

    return (
          
          <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px] dark:bg-black">
            

                <div className="text-black dark:text-white mb-[52px] text-left text-[32px] font-bold">
                    Howdy <span role="img" aria-label="waving emoji">👋</span>
                </div>
                <div className="flex flex-col items-start gap-2">
                    <HeaderAuth />
                    <LocaleSwitcher />
                    <ThemeSwitch />
                    
                </div>
                
                
          </div>
   
    );
  }
  
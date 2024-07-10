import { GoogleIcon, RightArrow } from "@/components/common/icons";
import { RegistrationModalForm } from "@/components/forms"  ;
import styles from "./Modal.module.css";
import {useRegister} from "@/hooks";



export default function RegistrationModalContent() {
  const {handleBack} = useRegister()
  return (

        <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
            
            <button onClick={handleBack}>
              <RightArrow />
            </button>

            <div className={`${styles.modalHeader} font-black mr-2` } >Create Password</div>
            <RegistrationModalForm />
            <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
                Rate My Professors is designed for and targeted to U.S. audiences and is governed by and operated in accordance with U.S. laws.
            </div>
        </div>
 
  );
}

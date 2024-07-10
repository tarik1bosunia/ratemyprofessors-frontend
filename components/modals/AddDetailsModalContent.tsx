import { AddDetailsModalForm} from "@/components/forms";
import { useModal } from "@/hooks";

export default function AddDetailsModalContent() {
    const {close: closeAddDeatailsModal} = useModal('adddetailsModal')
    const handleSkipforNow = () => {
        closeAddDeatailsModal()
    }

    return (
          
          <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
              
            <AddDetailsModalForm  />
            <button onClick={handleSkipforNow} className="skip_for_now_btn bg-transparent border-0 cursor-pointer font-bold outline-none text-base mt-14" type="button">Skip for now</button>
          </div>
   
    );
  }
  
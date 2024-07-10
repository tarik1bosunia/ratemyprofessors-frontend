
import {ProfileItems} from "@/components/account";

export default function ProfileItemsArea(){

    return (
        <div className="mb-14 min-h-[calc(-240px + 100vh)] overflow-hidden max-w-none">
          <div className="mx-auto max-w-[755px] min-h-[inherit] w-full">
          <ProfileItems />
          </div>
         </div>
    )
}
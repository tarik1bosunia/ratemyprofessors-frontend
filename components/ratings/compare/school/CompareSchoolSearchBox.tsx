import { NO_DATA_AVAILABLE } from "@/constants";
import Search from "./Search";

interface Props {
  id1?: string,
  id2?: string,
}

export default function CompareSchoolHeaderSearchBox({id1, id2}: Props){
    return (
        <div className="flex flex-col items-center bg-[#f7f7f7] mx-0 mb-3 mr-[3px] max-w-[444px] min-h-[205px] p-2.5 text-center w-full">
      
        <div className="bg-gray-300 leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[90px] text-[32px] font-poppins font-extrabold">{NO_DATA_AVAILABLE}</div>
        
        <div className="text-xs mt-1 font-bold">OVERALL</div>
        
        <Search id1={id1} id2={id2}/>
       
      </div>
    )
}
import { GrPowerReset } from "react-icons/gr";
import { LuShare } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";

export default function CompareSchoolHeader()
{
    return (
        <div className="flex flex-row items-center justify-between max-w-[888px] pb-4">
        <div className="flex items-center justify-between flex-row text-3xl hyphens-auto break-words pb-2 text-left font-black">
          <span className="mr-3 items-center">
            <RiGraduationCapLine className="text-black" />
          </span>
          Compare Schools
        </div>
        
        <div className="flex flex-row justify-around">
         <button className="flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4 bg-[#e4e4e4] text-[#9e9e9e]">
            <GrPowerReset />
            <span className="my-0 mx-1 font-bold">Reset</span>
          </button>
          <button className="flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4 bg-[#e4e4e4] text-[#9e9e9e]">
            <LuShare />
            <span className="my-0 mx-1 font-bold">Share Comparison</span>
          </button>
        </div>
      </div>
    )
}
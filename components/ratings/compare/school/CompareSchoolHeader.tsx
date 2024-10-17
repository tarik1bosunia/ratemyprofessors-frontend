'use client'
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { GrPowerReset } from "react-icons/gr";
import { LuShare } from "react-icons/lu";
import { RiGraduationCapLine } from "react-icons/ri";
import { useCopyToClipBoard } from "@/hooks";
import { SITE_BASE_URL } from "@/constants";
interface Props {
  id1?: string;
  id2?: string;
}

export default function CompareSchoolHeader({id1, id2}:Props)
{
  const [isDisabled, setIsdisabled] = useState(false)
  const [isShareable, setIsShareable] = useState(false)

  const router = useRouter();
  const handleReset=()=>{
    router.push("/compare/schools")
  }

  useEffect(() => {
    if(id1 == undefined && id2 == undefined){
        setIsdisabled(true)
    }
  }, [id1, id2])

  useEffect(() => {
    if(id1 != undefined && id2 != undefined){
        setIsShareable(true)
    }
  }, [id1, id2])


  const {handleCopy } = useCopyToClipBoard({ textToCopy: `${SITE_BASE_URL}/compare/school/${id1}/${id2}` });


    return (
        <div className="flex flex-row items-center justify-between max-w-[888px] pb-4">
        <div className="flex items-center justify-between flex-row text-3xl hyphens-auto break-words pb-2 text-left font-black">
          <span className="mr-3 items-center">
            <RiGraduationCapLine className="text-black" />
          </span>
          Compare Schools
        </div>
        <div className="flex flex-row justify-around">
         <button 
         disabled={isDisabled}
          onClick={handleReset}
           className={`
           flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4
            ${isDisabled ? "bg-[#e4e4e4] text-[#9e9e9e]" : "bg-black text-white"}
           `}>
            <GrPowerReset />
            <span className="my-0 mx-1 font-bold">Reset</span>
          </button>
          <button 
          disabled={!isShareable}
          onClick={handleCopy}
          className={`
          flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4 bg-[#e4e4e4] text-[#9e9e9e]
          ${isShareable ? "bg-black text-white": "bg-[#e4e4e4] text-[#9e9e9e]"}
          `}>
            <LuShare />
            <span className="my-0 mx-1 font-bold">Share Comparison</span>
          </button>
        </div>
      </div>
    )
}
"use client";

import { LuShare } from "react-icons/lu";
import { CiApple } from "react-icons/ci";
import { useState } from "react";
import { useRouter } from "next/navigation";


import { ProfessorDetails, Search } from "@/components/ratings/compare";


interface Props {
    params: {
      id1: string;
    };
}




  
export default function Page({ params: { id1 } }: Props) {
  const router = useRouter()
  const [isFocused, setIsFocused] = useState(false);

  const onClose = () => {
    router.push('/compare/professors')
  }

  return (
    <div className="my-0 mx-auto w-full max-w-[1280px] min-h-[calc(100vh-240px)] overflow-hidden">
      <div className="bg-[#f7f7f7] flex flex-col justify-start mb-[144px] max-w-[860px] min-h-[379px] p-[24px]">
        <div className="flex flex-row items-center justify-between">
          <div className="flex text-2xl font-bold">Compare Professors</div>
          <div className="flex flex-row justify-around">
            <button className="flex items-center bg-none outline-none border border-inherit rounded-[33px] cursor-pointer text-base mr-4 py-2 px-4 bg-[#e4e4e4] text-[#9e9e9e]">
              <LuShare />
              <span className="my-0 mx-1 font-bold">Share</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-full">
        <Search id1={id1}/>
          
          <div className="flex flex-row justify-between w-full">
            <ProfessorDetails id={id1} onClose={onClose}/>
            <div className="flex flex-col items-center justify-center bg-white border border-dashed border-gray-400 h-[206px] mr-0 mt-3 w-full  font-medium">
              <div className="text-gray-500 text-[20px] max-w-[236px] text-center">Look up a professor to add to comparison</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

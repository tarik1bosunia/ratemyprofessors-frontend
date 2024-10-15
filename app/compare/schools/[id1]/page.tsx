"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { CompareSchoolBody, CompareSchoolHeader } from "@/components/ratings/compare/school";


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
      <CompareSchoolHeader id1={id1}/>
        
        <CompareSchoolBody id1={id1}/>
      </div>
    </div>
  );
}

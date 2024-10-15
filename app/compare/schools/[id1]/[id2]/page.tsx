"use client";

import { useRouter } from "next/navigation";
import { CompareSchoolBody, CompareSchoolHeader } from "@/components/ratings/compare/school";



interface Props {
    params: {
      id1: string;
      id2: string;
    };
}
  
export default function Page({ params: { id1, id2 } }: Props) {
  const router = useRouter()

  const onClose = (id?: string) => {

    if (id === id1) {
      // If id1 is closed, redirect to id2
      router.push(`/compare/professors/${id2}`);
    }
    
    else if(id === id2) {
      // If id2 is closed, redirect to id1
      router.push(`/compare/professors/${id1}`);
    }
    
    else {
      // If id2 is closed, redirect to id1
      router.push(`/compare/professors`);
    }
  };


  return (
    <div className="my-0 mx-auto w-full max-w-[1280px] min-h-[calc(100vh-240px)] overflow-hidden">
      <div className="bg-[#f7f7f7] flex flex-col justify-start mb-[144px] max-w-[888px] min-h-[379px] p-[24px]">
        
        <CompareSchoolHeader id1={id1} id2={id2} />
        
        <CompareSchoolBody id1={id1} id2={id2}/>
   
      </div>
    </div>
  );
}

import { ProssorRatingType } from "@/types";
import RatingChart from "./RatingChart";

interface Props{
    ratings: ProssorRatingType[]
  }

export default function TeacherRatings({ ratings }: Props)
{
    return (
        <div className="flex flex-[1_0_60%] flex-col pr-[22px]">
            <RatingChart ratings={ratings}/>
       
            <div className="mt-4">
                <h3 className="text-base font-semibold pb-2.5 text-left">
                    Check out Similar Professors in the Mathematics Department
                </h3>
                <ul className="flex items-center justify-evenly bg-[rgba(217,232,255,0.61)] p-[35px] w-full">
                    <li>
                        <a href="professor/139" className="flex items-center pr-[5px] no-underline">
                            <span className="flex items-center justify-center bg-[#0055fd] text-[#f1f1f1] text-[16px] mr-[8px] p-[10px_7px] font-poppins font-black">5.00</span>
                            <span className="text-left">Boby Mohr</span>
                        </a>
                    </li>
                    <li>
                        <a href="professor/139" className="flex items-center pr-[5px] no-underline">
                            <span className="flex items-center justify-center bg-[#0055fd] text-[#f1f1f1] text-[16px] mr-[8px] p-[10px_7px] font-poppins font-black">5.00</span>
                            <span className="text-left">Boby Mohr</span>
                        </a>
                    </li>
                    <li>
                        <a href="professor/139" className="flex items-center pr-[5px] no-underline">
                            <span className="flex items-center justify-center bg-[#0055fd] text-[#f1f1f1] text-[16px] mr-[8px] p-[10px_7px] font-poppins font-black">5.00</span>
                            <span className="text-left">Boby Mohr</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
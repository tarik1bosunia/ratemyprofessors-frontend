import { dateformater } from "@/components/utils";
import { NO_DATA_AVAILABLE } from "@/constants";
import { ProssorRatingType } from "@/types"
import { MdOutlineComputer } from "react-icons/md";

interface Props{
    rating: ProssorRatingType
}
export default function RatingsItem({rating}:  Props){
    return (
        <li >
        <div className="bg-[rgba(241,241,241,0.4)] my-4 mx-0">
            <div className="pt-5 px-6 flex">
                <div className="flex flex-col">
                    <div className="mb-6">
                        <div className="flex flex-col">
                            <div className="text-[14px] font-semibold leading-[14px] mb-1 uppercase">
                                Quality
                            </div>
                            <div className="self-center bg-[#7ff6c3] h-16 leading-[36px] mb-2 p-[14px_10px] w-18 text-[32px] font-black">{rating.rating}</div>
                        </div>
                    </div>
                    <div className="mb-6">
                        <div className="flex flex-col">
                        <div className="text-[14px] font-semibold leading-[14px] mb-1 uppercase">
                                Difficulty
                            </div>
                            <div className="self-center bg-[#e4e4e4] h-16 leading-[36px] mb-2 p-[14px_10px] w-18 text-[32px] font-black">{rating.difficulty}</div>


                        </div>
                    </div>
                </div>
                <div className="flex flex-col ml-12 text-left w-full">
                    <div className="flex items-center justify-between my-[5px] mb-[10px] min-h-[31px]">
                        <div className="flex">
                            <div className="flex items-center self-center text-[16px] pr-[22px] uppercase font-black">
                                {
                                    rating.is_online_course &&  <MdOutlineComputer className="mr-3 h-5 w-5" />
                                }
                               
                                {
                                    rating.course_code
                                }
                            </div>
                        </div>
                        <div className="pb-0 font-bold">
                   
                            {
                                dateformater(rating.created_at)
                            }
                        </div>
                    </div>
                    <div className="flex flex-wrap mb-3">
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            For Credit: <span className="font-bold">{rating.was_class_taken_for_credit ? "Yes" : "No"}</span>
                        </div>
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            Attendance: <span className="font-bold">{rating.was_attendance_mandatory ? "Mendatory" : "Not Mendatory"}</span>
                        </div>
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            Would Take Again:: <span className="font-bold">{rating.is_take_professor_again ? "Yes" : "No"}</span>
                        </div>
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            Grade: <span className="font-bold">{rating.grade}</span>
                        </div>
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            Textbook: <span className="font-bold">{rating.was_use_textbook ? "Yes" : NO_DATA_AVAILABLE}</span>
                        </div>
                        <div className="mb-2 text-[16px] leading-[1.54] mr-4 py-1 whitespace-nowrap">
                            Online Class: <span className="font-bold">{rating.is_online_course ? "Yes" : NO_DATA_AVAILABLE}</span>
                        </div>
                
                    </div>

                    <div className="flex-1 text-[16px] leading-[1.5] mb-[30px]">
                        {
                            rating.comment
                        }
                    </div>
                    <div className="flex flex-wrap mb-3">
                        {
                            rating.tags.map((tag, tagindex) => (
                                <span key={tagindex} className="bg-gray-200 rounded-[14.5px] mx-4 mb-2 p-2 px-4 text-center uppercase font-bold">
                                    {tag}
                                </span>
                            ))
                        }

                    </div>
                    <div className="flex justify-between my-6">
                        like dislike share report rating
                    </div>
                </div>

            </div>
        </div>
        </li>
    )
}
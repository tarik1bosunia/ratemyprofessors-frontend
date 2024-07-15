import { ChangeEvent } from "react";
import { IoMdAlert } from "react-icons/io";
import { RxCaretUp } from "react-icons/rx";

type Props = {
    ratingSubject: 'school' | 'professor',
    labelId: string,
    labelText: string,
    value: string
    onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}


export default function RatingComment({ratingSubject, labelId, labelText, value, onChange}: Props){
    
    return(

        <div className='mt-0 mr-10 mb-5 ml-0 min-w-[343px] text-left'>
            <div className='bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left'>
                <div className='text-center'>
                                        
                <div className='text-base font-bold mb-4'>{labelText}</div>
                <div className='text-left text-base mb-4'>
                    {
                        ratingSubject === 'school' && "Discuss your personal experience on this school. What's great about it? What could use improvement?"
                    }
                    {
                        ratingSubject === 'professor' && "Discuss the professor's professional abilities including teaching style and ability to convey the material clearly"
                    }
                </div>
                <div className='text-left'>
                    <div className='bg-[#f7f7f7] rounded-[3px] flex flex-col text-base  mb-4'>
                        <div className='flex items-center justify-between p-[12px_22px_12px_10px]'>
                            <div className='inline-flex font-bold'>
                                
                                <IoMdAlert />
                                <h2 className='ml-2'> Guideliens</h2>
                            </div>
                            <RxCaretUp />
                        </div>
                      
                        <div>
                        <div className='flex flex-col text-left p-[0px_22px_22px_60px]'>
                            <ol className='font-base mb-2 list-disc'>

                                <li>Your rating could be removed if you use profanity or derogatory terms.</li>
                                <li>Refer to the rating categories to help you better elaborate your comments.</li>
                                <li>Don&apos;t forget to proof read!</li>
                            </ol>
                            <a href="/guidelines" target='_blank' className='font-bold text-sm -ml-[6px] w-fit underline'>View all Guidelines</a>
                        </div>
                        <div className='relative left'>
                            <div className='flex flex-col items-end'>
                            <textarea 
                            name={labelId} 
                            id={labelId}
                            value={value}
                            onChange={onChange}
                            placeholder= {
                                ratingSubject === 'school' 
                                ? "What do you want other students to know about this school?"
                                : ratingSubject === 'professor' ? "what do you want other students to know about this professor?" : ""
                            }
                            rows={9}
                            className="border border-[#d1d1d1] rounded-[3px] font-sans text-[16px] outline-none p-[16px] resize-none w-full"></textarea>
                            <span className='text-[#7e7e7e] font-bold mt-[4px]'>
                                0/ 350
                            </span>
                            </div>
                        </div>
                        </div>

                       
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}
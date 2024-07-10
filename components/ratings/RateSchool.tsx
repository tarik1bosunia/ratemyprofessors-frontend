'use client'
import {RatingSliders} from '@/components/ratings'
import { RxCaretUp } from "react-icons/rx";
import { IoMdAlert } from "react-icons/io";
import { useState } from 'react';

type Config = {
    labelId: string,
    labelText: string,
}

const config: Config[] =  [
    {
        labelId: 'reputation',
        labelText: 'reputation',

    },
    {
        labelId: 'facilites',
        labelText: 'Facilities and common areas',
    },
    {
        labelId: 'internet',
        labelText: 'Internet',
    },
    {
        labelId: 'food',
        labelText: 'Food',
    },
    {
        labelId: 'clubs',
        labelText: 'Clubs',
    },
    {
        labelId: 'social',
        labelText: 'Social',
    },
    {
        labelId: 'happiness',
        labelText: 'Happiness',
    },
    {
        labelId: 'safety',
        labelText: 'Safety',
    },
]



export default function RateSchool(){
    const [submitable, setSubmitable] = useState(false);
    
    return (
        <div className="my-0 mx-auto max-w-[1280px] w-full mb-[58px] min-h-[calc(-240px+100vh)] overflow-hidden"> 
        <form role="form" className="xxl:max-w-[926px]">

            <RatingSliders config={config} />
            <div className='mt-0 mr-10 mb-5 ml-0 min-w-[343px] text-left'>
                <div className='bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left'>
                    <div className='text-center'>
                                            
                    <div className='text-base font-bold mb-4'>Write a Review</div>
                    <div className='text-left text-base mb-4'>
                        Discuss your personal experience on this school. Whats&apos; great about it? What could use improvement?
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
                                <textarea name="comment" placeholder="What do you want other students to know about this school?" rows={9} className="border border-[#d1d1d1] rounded-[3px] font-sans text-[16px] outline-none p-[16px] resize-none w-full"></textarea>
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
            <div className='m-[0px_40px_20px_0px] min-w-[343px] text-left'>
                <div className='bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left'>
                    <div className='text-center'>
                        <div className='flex flex-col justify-center'>
                            <div className='leading-[17px] m-[0px_62px_24px]'>
                            By clicking the &quot;Submit&quot; button,  I acknowledge that I have read and agreed to the Rate My Professors
                                 <a target="_blank" className="text-[#0055fd] no-underline" href="/guidelines">
                                 Site Guidelines</a>,
                                 <a  target="_blank" className="text-[#0055fd] no-underline" href="/terms-of-use">
                                 Terms of Use</a>
                                  and 
                                  <a target="_blank" className="text-[#0055fd] no-underline" href="/privacy">Privacy Policy</a>.
                                   Submitted data becomes the property of Rate My Professors.
                            </div>
                            <div className='flex justify-center'>
                                <div className='relative text-left'>
                                    <button disabled={!submitable} type='submit' className={`${submitable? "bg-black hover:bg-gray-800  transform hover:scale-105" : "bg-gray-600 cursor-not-allowed"}  border border-[#0021ff] rounded-full text-white flex font-bold justify-center leading-[1.54] outline-none transition-transform duration-200 ease-in-out px-[66px] py-[9px]`}>
                                        Submit Rating
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
    )
}
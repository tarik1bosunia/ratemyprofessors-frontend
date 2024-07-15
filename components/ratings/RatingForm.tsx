'use client'

import { ChangeEvent, FormEvent, useState } from 'react';
import RatingInput from './RatingInput';
import { ProfessorsTag } from '@/types';

interface Config{
    labelText: string;
    labelId: string;
    type: 'slider' | 'comment' | 'select' | 'multiple_select' | 'radio' | 'radio1item';
    value: string | boolean | null | string[] |  ProfessorsTag[];
    required?: boolean;
    onChange?:((event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void) | ((value: string[] ) => void);
    options?: { value: string; label: string }[] ;
    childrenText?: string;
    subInput?: Config
}

interface Props{
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange:(event:ChangeEvent <HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement >) => void;
    onSubmit: (event:FormEvent<HTMLFormElement>) => void;
    ratingSubject: 'school' | 'professor',
    submitable: boolean,
}

export default function RatingForm({onSubmit, onChange,  config, isLoading, btnText, ratingSubject, submitable}: Props){
    
    return (
        <div className="my-0 mx-auto max-w-[1280px] w-full mb-[58px] min-h-[calc(-240px+100vh)] overflow-hidden"> 
        <form role="form" onSubmit={onSubmit} className="xxl:max-w-[926px]">


           {
             config.map((rating, index) => (
                <RatingInput
                key={index}
                type={rating.type}
                labelId={rating.labelId}
                labelText={rating.labelText}
                value={rating.value}
                ratingSubject= {ratingSubject}
                onChange={rating.onChange || onChange}
                options={rating.options}
                childrenText={rating.childrenText}
                subInput={
                    rating.subInput &&
                    (
                        <RatingInput
                        type={rating.subInput.type}
                        labelId={rating.subInput.labelId}
                        labelText={rating.subInput.labelText}
                        value={rating.subInput.value}
                        ratingSubject={ratingSubject}
                        onChange={rating.subInput.onChange || onChange }
                        subInput={undefined}
                    />
                    )
                }
                />
            ))
           }

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
                                        {
                                            btnText
                                        }
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
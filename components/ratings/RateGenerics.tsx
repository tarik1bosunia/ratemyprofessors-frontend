'use client'

import { FormEvent, ChangeEvent } from "react";
import {Input} from "@/components/forms";
import {Spinner} from "@/components/common";
import RatingSlider from "./RatingSlider";

interface Config{
    labelText: string;
    labelId: string;
    type: string;
    value: string;
}

interface Props{
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange:(event:ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event:FormEvent<HTMLFormElement>) => void;
}

export default function RateGenerics({onSubmit, onChange,  config, isLoading, btnText}:Props){
    return (
        <form className="space-y-6" onSubmit={onSubmit}>
        
        {
            config.map((input, index) =>(
              
                <RatingSlider

                    key={index}
                    labelId={input.labelId}
                    type={input.type}
                    onChange={onChange}
                    value={input.value}
                 >
                    {input.labelText}

                 >
            ))
        }

        <div>
          <button
            type="submit"
            className="continue-button"
            disabled={isLoading}
          >
            {isLoading ? <Spinner sm/>: `${btnText}`}
          </button>
        </div>

       </form>
    )
}
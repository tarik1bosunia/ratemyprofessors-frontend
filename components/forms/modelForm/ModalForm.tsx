'use client'

import { FormEvent, ChangeEvent } from "react";
import {Input} from "@/components/forms";
import {Spinner} from "@/components/common";

interface Config{
    labelText: string;
    labelId: string;
    type: string;
    value: string;
    link?: {
      linkText: string;
      linkUrl: string;
    };
    required?: boolean;
}

interface Props{
    config: Config[];
    isLoading: boolean;
    btnText: string;
    onChange:(event:ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (event:FormEvent<HTMLFormElement>) => void;
}

export default function Form({onSubmit, onChange,  config, isLoading, btnText}:Props){
    return (
        <form className="space-y-6" onSubmit={onSubmit}>

<style jsx>
    {`
              .continue-button{
            margin-top: 46px;
            width: 100%;
            background: black;
            border: 1px solid rgb(0, 33, 255);
            border-radius: 100px;
            color: white;
            display: flex;
            font-stretch: normal;
            font-weight: 700;
            -webkit-box-pack: center;
            justify-content: center;
            letter-spacing: normal;
            line-height: 1.54;
            outline: none;
            padding: 11px 46px;
            transition: transform 0.2s ease 0s;
        }
    `}
  </style> 
        
        {
            config.map((input, index) =>(
              
                <Input
                    key={index}
                    labelId={input.labelId}
                    type={input.type}
                    onChange={onChange}
                    value={input.value}
                    link={input.link}
                    required={input.required}
                 >
                    {input.labelText}

                 </Input>
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
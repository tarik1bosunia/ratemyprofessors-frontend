import { capitalizeFirstLetter } from "@/utils";
import { ChangeEvent } from "react";

type SelectInputProps = {
    labelId: string;
    labelText: string;
    onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
    value: string;
    required?: boolean;
    options: { value: string; label: string }[] ;
    children?: React.ReactNode;
    subInput?: React.ReactNode;
  };
  

export default function SelectInput({labelId, labelText, onChange, value, required, options, children, subInput}:SelectInputProps){


    
    return (
        <div className="mr-10 mb-5 ml-0 mt-0 min-w-[343px] text-left">
        <div className="bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left">
          <div className="text-base font-bold mb-4">
            {capitalizeFirstLetter(labelText)}
            <span className="text-[#ff5959] ml-[3px]">*</span>
          </div>
          <div className="text-center">
            <div className="flex justify-center">
                <div className="relative text-left w-[311px]">
                
                    <select
                    id={labelId}
                    name={labelId}
                    value={value as string | number}
                    onChange={onChange}
                    required={required}
                    className="block w-full mt-1"
                    >
                  
                    {
                   
                        <option value="" disabled hidden>
                            {children}
                        </option>
                    }
                    {options?.map((option) => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                    <div className="error_container relative"></div>
                </div>
            </div>
          </div>
          <div>
          {
          subInput
        }
          </div>
        </div>

      </div>
    )
}
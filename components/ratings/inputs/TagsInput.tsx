"use client";
import { capitalizeFirstLetter } from "@/utils";
import {useEffect, useState } from "react";
import styles from '@/components/ratings/inputs/ratingsinput.module.css'

type TagsInputProps = {
  labelId: string;
  labelText: string;
  onChange: ((value: string[] ) => void);
  value: string[];
  required?: boolean;
  options: { value: string; label: string }[];
};

export default function TagsInput({
  labelId,
  labelText,
  value,
  onChange,
  options,
  required,
}: TagsInputProps) {
    const [_options, setOptions] = useState<{ value: string; label: string; isSelected: boolean }[]>([]);

    useEffect(() => {
        setOptions(
          options.map((option) => ({
            ...option,
            isSelected: value.includes(option.value),
          }))
        );
    }, [options, value]);

    const handleSelect = (index: number) => {
        const updatedOptions = _options.map((option, idx) => ({
          ...option,
          isSelected: idx === index ? !option.isSelected : option.isSelected,
        }));
    
        const selectedTags = updatedOptions
          .filter((option) => option.isSelected)
          .map((option) => option.value);
    
        if (selectedTags.length <= 3) {
          setOptions(updatedOptions);
          onChange(selectedTags);
        }
      };
  return (
    <div className="mr-10 mb-5 ml-0 mt-0 min-w-[343px] text-left">
      <div className="bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left">
        <div className="text-base font-bold mb-4">
          {capitalizeFirstLetter(labelText)}
          <span className="text-[#ff5959] ml-[3px]">*</span>
        </div>
        <div className="text-center">
          <div className="flex flex-wrap">
            {
                _options.map((_option, index) => (
                <div
                    onClick={() => handleSelect(index)}
                    key={index}
                    className="border-white rounded-[1.5px] border-solid border-[1.5px] inline-block h-7 align-middle mb-[7px] mt-[6px] w-auto"
                >
                    <input
                    type="checkbox"
                    name={_option.label}
                    className="border-0 clip-rect(0px,0px,0px,0px) h-[1px] m-[-1px] overflow-hidden p-0 absolute whitespace-nowrap w-[1px]"
                    checked={_option.isSelected}
                    readOnly
                    />
                    <div className={`${_option.isSelected ? styles.tagdivSelected : styles.tagdivUnselected}`}>
                    {_option.label}
                    </div>
                </div>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}

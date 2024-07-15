'use client';
import { ChangeEvent, useState } from 'react';
import ComputerIcon from '@/public/icons/ComputerIcon.svg';
import Image from 'next/image';
import CheckMarkIcon from '@/public/icons/CheckMark.svg';

type SelectInputProps = {
  labelId: string;
  labelText: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: boolean;
};

export default function RadioSingleInput({ labelId, labelText, onChange, value }: SelectInputProps) {
  const [checked, setChecked] = useState<boolean>(value);

  

  const handleCheckboxChange = () => {
    const newValue = !checked;
    setChecked(newValue);

    if (onChange) {
      const syntheticEvent = {
        target: {
          name: labelId,
          checked: newValue,
          value: newValue.toString(),
        },
        currentTarget: {
          name: labelId,
          checked: newValue,
          value: newValue.toString(),
        },
        nativeEvent: {} as Event,
        preventDefault: () => {},
        stopPropagation: () => {},
      } as ChangeEvent<HTMLInputElement>;
      onChange(syntheticEvent);
    }
  };

  return (
    <div className="flex items-center justify-start mt-2 min-w-[311px]">
      <div className="relative text-left">
        <div className="flex text-base leading-7">
          <div
            className="mr-1 border-white rounded-[1.5px] border-solid border-[1.5px] inline-block h-7 align-middle w-7"
            onClick={handleCheckboxChange}
          >
            <input
              type="checkbox"
              name={labelId}
              className="border-0 clip-rect(0px,0px,0px,0px) h-px m-[-1px] overflow-hidden p-0 absolute whitespace-nowrap w-px"
              checked={checked}
              readOnly
            />
            <div
              className={`${checked ? 'bg-[#151515]' : 'bg-white'} border-[1.5px] border-[#151515] rounded-full text-white inline-block h-[25px] select-none w-[25px]`}
              aria-hidden="true"
            >
              {checked && <Image className="w-full h-full" src={CheckMarkIcon} alt="checkmark icon white" />}
            </div>
          </div>
        </div>
        <div className="error_container"></div>
      </div>
      <Image src={ComputerIcon} alt="computer image" />
      <div className="ml-1">{labelText}</div>
    </div>
  );
}

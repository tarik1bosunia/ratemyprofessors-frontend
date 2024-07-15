"use client";
import { capitalizeFirstLetter } from "@/utils";
import { ChangeEvent, useState } from "react";

import styles from "@/components/ratings/ratings.module.css";

type RatingRadioInputProps = {
  labelId: string;
  labelText: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: boolean | null;
  required?: boolean;
};

export default function RatingRadioInput({
  labelId,
  labelText,
  value,
  onChange,
}: RatingRadioInputProps) {

  return (

      <div className="mr-10 mb-5 ml-0 mt-0 min-w-[343px] text-left">
        <div className="bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left">
          <div className="text-base font-bold mb-4">
            {capitalizeFirstLetter(labelText)}
            <span className="text-[#ff5959] ml-[3px]">*</span>
          </div>
          <div className="text-center">
            <div className="relative text-left">
              <div className="flex flex-row justify-center">
                <div className="flex flex-col my-0 mx-8 max-w-11 cursor-pointer text-center">
                  <input
                    type="radio"
                    name={labelId}
                    id={`${labelId}-Yes`}
                    value="Yes"
                    className={`${styles.radioInputYes}`}
                    checked={value == true}
                    onChange={onChange}
                  />
                  <label
                    htmlFor={`${labelId}-Yes`}
                    className="text-gray-500 text-base leading-6"
                  >Yes</label>
                </div>
                <div className="flex flex-col my-0 mx-8 max-w-11 cursor-pointer text-center">
                  <input
                    type="radio"
                    name={labelId}
                    id={`${labelId}-No`}
                    value="No"
                    className={styles.radioInputNo}
                    checked={value == false}
                    onChange={onChange}
                  />
                  <label
                    htmlFor={`${labelId}-No`}
                    className="text-gray-500 text-base leading-6"
                  >No</label>
                </div>
              </div>
              <div className="error-container"></div>
            </div>
          </div>
        </div>
      </div>

  );
}

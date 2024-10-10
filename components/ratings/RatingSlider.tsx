'use client'
import { capitalizeFirstLetter } from '@/utils';
import { ChangeEvent, useEffect, useState } from 'react';

type RatingSliderProps = {
  labelId: string;
  labelText: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  required?: boolean;
}

export default function RatingSlider({labelId, labelText, value, required, onChange}: RatingSliderProps) {

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleHover = (index: number) => {
    setHoveredIndex(index);
  };

  const handleLeave = () => {
    setHoveredIndex(null);
  };

  const handleSelect = (index: number) =>{
    if(selectedIndex == index) {
      setSelectedIndex(null)
      if (onChange) {
        const event = {
          target: {
            name: labelId,
            value: ''
          }
        } as ChangeEvent<HTMLInputElement>;
        onChange(event);
      }
    }
    else {
      setSelectedIndex(index)
        if (onChange) {
          const event = {
            target: {
              name: labelId,
              value: (index).toString()
            }
          } as ChangeEvent<HTMLInputElement>;
          onChange(event);
        }
    }
    
  }

  const ratings = [
    {label: "1 - Awful", color: "bg-red-600"},
    {label: "2 - Ok", color: "bg-yellow-500"},
    {label: "3 - Good", color: "bg-yellow-400"},
    {label: "4 - Great", color: "bg-green-400"},
    {label: "5- Awsome", color: "bg-green-600"},
  ]

  useEffect(() => {
    setSelectedIndex( value != '' ? Number(value) : null);
  }, [value]);

  return (
    <div className="mr-10 mb-5 ml-0 mt-0 min-w-[343px] text-left">
      <div className="bg-white border border-[#e4e4e4] rounded-[6px] shadow-[0_4px_4px_rgba(126,126,126,0.25)] p-[24px_28px_20px] text-left">
        <div className="text-base font-bold mb-4">
          {
            capitalizeFirstLetter(labelText)
          } 
          <span className="text-[#ff5959] ml-[3px]">*</span>
        </div>
        <div className="text-left">
          <div className="inline-flex flex-col w-full">
            <div className="hidden">
              <div className="">
                <label
                  htmlFor={labelId}
                  className=""
                >
                  {
                    labelText
                  }
                </label>
                <input
                  type="range"
                  name={labelId}
                  id={labelId}
                  value={value}
                  onChange={onChange}
                />
              </div>
              <div className=""></div>
            </div>

            <div className="flex flex-row justify-center">
                {
                    ratings.map((rating, index) => (
                        <div 
                            key={index} 
                            className={`
                                border-r-[3px] border-r-white
                                bg-gray-300 h-10 w-16 opacity-50 touch-none transition-all duration-200 ease-in-out ${index == 0 && 'rounded-l-[20px]'} ${index == ratings.length-1 && 'rounded-r-[20px]'}
                                ${hoveredIndex !== null && hoveredIndex >= index ? rating.color : ''}
                                ${selectedIndex !== null && hoveredIndex == null &&  selectedIndex >= index ? `${rating.color} opacity-1`: ''}
                            `}
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={handleLeave}
                            onClick={() => handleSelect(index)}
                        >
                            
                        </div>
                    ))
                }
            </div>
            <div className="flex justify-center">
              <div
                className="text-gray-600 font-HelveticaNeue font-medium text-base leading-6 mt-2 opacity-100 overflow-hidden text-right transition-opacity duration-200 ease-out w-28"
              >
                {
                    hoveredIndex == null && selectedIndex == null ? ratings[0].label : ""
                }
              </div>
              <div
                className={`${hoveredIndex == null && selectedIndex ? 'text-black' : 'text-gray-600'} font-HelveticaNeue font-medium text-base leading-6 mt-2 ${(hoveredIndex != null || selectedIndex != null) ? 'opacity-100' : 'opacity-0'} overflow-hidden text-right transition-opacity duration-200 ease-out w-28`}
              >
                {
                    hoveredIndex != null ? ratings[hoveredIndex].label : selectedIndex != null ? ratings[selectedIndex].label : ""
                }
              </div>

              <div
                className="text-gray-600 font-HelveticaNeue font-medium text-base leading-6 mt-2 opacity-100 overflow-hidden text-right transition-opacity duration-200 ease-out w-28"
              >
                {hoveredIndex == null && selectedIndex == null ? ratings.at(-1)?.label : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

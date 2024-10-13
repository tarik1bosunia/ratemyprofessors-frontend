"use client"; // If using a client component in Next.js 13+

import { useEffect, useRef, useState } from "react";
import { CiApple } from "react-icons/ci";

interface Props {
  id1?: string;
  id2?: string;
}

export default function Search({ id1, id2 }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOutlineRed, setIsOutlineRed] = useState(false);
  
  const ref = useRef<HTMLDivElement | null>(null); // Ref to track the outer div

  console.log("id1: ", id1);
  console.log("id2: ", id2);

  // Use useEffect to set isDisabled based on id1 and id2
  useEffect(() => {
    // Check if both id1 and id2 are defined
    if (id1 !== undefined && id2 !== undefined) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false); // Reset when either id1 or id2 is undefined
    }
  }, [id1, id2]); // Dependency array to run effect when id1 or id2 changes

  // Click handler for the div
  const handleClick = () => {
    setIsOutlineRed(true); // Set outline to red when div is clicked
  };

  // Effect to handle clicks outside the component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOutlineRed(false); // Reset outline if clicked outside
      }
    };

    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form action="" className="mb-4 text-left w-full">
      <div ref={ref}>
        <div className="relative w-full">
          <div className="absolute top-4 left-7 w-fit z-10">
            <CiApple className="text-2xl" />
          </div>
          <div
            onClick={handleClick} // Handle click on the div
            className={`relative w-full max-w-none rounded-[32px] ${
              isFocused ? "shadow-[0_2px_2px_rgba(126,126,126,0.25)]" : ""
            }`}
          >
            <input
              disabled={isDisabled}
              type="text"
              className={`${isOutlineRed ? "border-2 border-red-500" : "border-none"} text-[rgb(49,49,49)] text-[20px] h-[56px] outline-none p-[16px_60px] w-full rounded-[43px] max-w-none`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              style={{ pointerEvents: 'none', cursor: 'default' }} // Keep input disabled from user interactions
            />
          </div>
        </div>
      </div>
    </form>
  );
}

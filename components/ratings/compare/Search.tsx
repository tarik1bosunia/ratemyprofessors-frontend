"use client";
import { useEffect, useRef, useState } from "react";
import { CiApple } from "react-icons/ci";
import Dropdown from "./DropDown";

interface Props {
  id1?: string;
  id2?: string;
}

export default function Search({ id1, id2 }: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [isOutlineRed, setIsOutlineRed] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setIsDisabled(id1 !== undefined && id2 !== undefined);
  }, [id1, id2]);

  const handleClick = () => {
    if (isDisabled) setIsOutlineRed(true);
  };

  // Handle clicks outside the component to close dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        dropdownRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowDropdown(false); // Close dropdown if clicked outside
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputValue.trim()) {
      setShowDropdown(true);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    if (inputValue.trim()) {
      setShowDropdown(true);
    }
  };

  const handleBlur = () => {
    // Delay closing the dropdown to allow time for the link click
    setTimeout(() => {
      if (!document.activeElement || (document.activeElement !== inputRef.current && document.activeElement !== dropdownRef.current)) {
        setIsFocused(false);
        if (!inputValue.trim()) {
          setShowDropdown(false);
        }
      }
    }, 200); // 200ms delay to allow clicks in the dropdown
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 text-left w-full relative">
      <div ref={inputRef}>
        <div className="relative w-full">
          <div className="absolute top-4 left-7 w-fit z-10">
            {!showDropdown && <CiApple className="text-2xl" />}
          </div>
          <div
            onClick={handleClick}
            className={`relative w-full max-w-none rounded-[32px] ${
              isFocused ? "shadow-[0_2px_2px_rgba(126,126,126,0.25)]" : ""
            }`}
          >
            <input
              disabled={isDisabled}
              type="text"
              className={`${isOutlineRed ? "border-2 border-red-500" : "border-none"} 
                          text-[rgb(49,49,49)] text-[20px] h-[56px] outline-none p-[16px_60px] w-full max-w-none 
                          focus:ring-0 ${showDropdown ? "rounded-t-[43px]" : "rounded-[43px]"}`}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onFocus={handleFocus}
              onBlur={handleBlur} // Delay dropdown closure
              style={{
                pointerEvents: isDisabled ? "none" : "auto",
              }}
              ref={inputRef} // Ref for input
            />
          </div>
        </div>
        {isOutlineRed && (
          <div className="text-red-500 mt-2 font-bold">
            You can only compare two professors at this time. Please remove a
            professor to add another.
          </div>
        )}
      </div>

      {/* Dropdown */}
      {showDropdown && (
        <div
          ref={dropdownRef} // Ref for dropdown
          className="absolute bg-white border-0 rounded-lg rounded-t-none shadow-lg w-full z-10 max-h-60 overflow-y-auto"
        >
          <Dropdown query={inputValue} setShowDropdown={setShowDropdown} id={id1}/>
        </div>
      )}
    </form>
  );
}

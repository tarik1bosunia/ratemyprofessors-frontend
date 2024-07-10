'use client';
import { useState } from 'react';
import { PiCaretDownLight } from 'react-icons/pi';

const HeaderSearch = () => {
  const [search, setSearch] = useState<'school' | 'professor'>('school');
  const [isOpenSearchTitleDropdown, setIsOpenSearchTitleDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenSearchTitleDropdown((prev) => !prev);
  };

  return (
    <div className="w-full">
      <div className="flex items-center w-full my-0 mx-auto">
        <div className='relative'>
          {
            search === 'school' 
            ? 
            <button
            className="teacher_school_toggle_button flex items-center bg-none border-0 text-white cursor-pointer mr-[14px] outline-none relative"
            type="button"
            role="button"
            title="Teacher School Toggle Button"
            onClick={handleDropdown}
          >
            <span>
              <svg
                className="mr-[5px]"
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11 0L0 6L4 8.18V14.18L11 18L18 14.18V8.18L20 7.09V14H22V6L11 0ZM17.82 6L11 9.72L4.18 6L11 2.28L17.82 6ZM11 15.72L16 12.99V9.27L11 12L6 9.27V12.99L11 15.72Z"
                  fill="#ffffff"
                  data-testid="GRAD_CAP_PATH_TESTID"
                ></path>
              </svg>
            </span>
            <div className="text-white text-[18px] leading-[21px] pr-[10px]">
              Schools
            </div>
            <PiCaretDownLight className="w-6 h-6" />
            </button>
            :
            <button type="button" role="button" title="">
              <span className=""> 
              <svg width="18" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.67889 4.14964C10.078 2.0159 11.9509 0.400024 14.2004 0.400024C14.7527 0.400024 15.2004 0.84774 15.2004 1.40002C15.2004 3.03165 14.3507 4.46501 13.0696 5.28168C15.6839 5.77973 17.6004 8.4971 17.6004 11.8C17.6004 15.7456 14.7573 20.8 11.8004 20.8C10.5678 20.8 9.8655 20.6127 9.3257 20.1809C9.2611 20.1292 9.20071 20.076 9.13303 20.0151C9.12474 20.0078 9.12021 20.0028 9.11718 19.9994L9.11717 19.9994C9.11505 19.9971 9.11367 19.9955 9.11225 19.9946L9.00039 20C8.94042 20 8.91449 19.9963 8.90181 19.9944C8.89392 19.9933 8.89116 19.9929 8.88853 19.9946L8.86775 20.0151C8.80008 20.076 8.73968 20.1292 8.67509 20.1809C8.13528 20.6127 7.43296 20.8 6.20039 20.8C3.24351 20.8 0.400391 15.7456 0.400391 11.8C0.400391 8.14065 2.75289 5.20002 5.80039 5.20002C6.73116 5.20002 7.4215 5.30554 8.00039 5.5141V5.40002C8.00039 5.10508 7.77984 4.85504 7.49683 4.80798L7.40039 4.80002H5.80039C5.24811 4.80002 4.80039 4.35231 4.80039 3.80002C4.80039 3.28719 5.18643 2.86452 5.68377 2.80675L5.80039 2.80002H7.40039C8.37994 2.80002 9.23574 3.3462 9.67889 4.14964ZM8.05318 7.76945C8.35477 7.92025 8.65108 8.00002 9.00039 8.00002C9.3497 8.00002 9.64601 7.92025 9.9476 7.76945L10.4476 7.49445C10.8269 7.30481 11.3159 7.20002 12.2004 7.20002C14.0329 7.20002 15.6004 9.1594 15.6004 11.8C15.6004 14.7878 13.3435 18.8 11.8004 18.8L11.4603 18.795C10.953 18.7785 10.731 18.7223 10.6089 18.6435L10.5253 18.5768L10.4535 18.513C10.0557 18.1632 9.6465 18 9.00039 18C8.35428 18 7.94506 18.1632 7.54724 18.513L7.4257 18.6192C7.2905 18.7273 7.01782 18.8 6.20039 18.8C4.65727 18.8 2.40039 14.7878 2.40039 11.8C2.40039 9.1594 3.96789 7.20002 5.80039 7.20002C6.68489 7.20002 7.17389 7.30481 7.55318 7.49445L8.05318 7.76945Z" fill="#ffffff" data-testid="APPLE_PATH_TESTID"></path></svg>
              </span>
              <div className="">Professors</div>
              <img src="/static/media/caret-down.a8eae91f.svg" alt="Caret Down"/>
            </button> 
          }


          {isOpenSearchTitleDropdown && (
            <div
              className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <div className="py-1" role="none">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 1
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 2
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  Option 3
                </a>
              </div>
            </div>
          )}
        </div>
        <div className="w-full max-w-[795px]">
          <div className="flex items-center my-0 mx-auto max-w-[746px]">
            {search === 'professor' ? (
              <div className="relative w-full">
                <div></div>
                <div className="max-w-[350px] flex justify-center items-center relative w-full">
                  <input
                    type="text"
                    aria-label="search"
                    placeholder="Professor Name"
                    className="text-[16px] leading-[24px] p-[8px_36px_8px_20px] w-full border-0 rounded-[43px] text-[#9e9e9e] text-xl max-w-none outline-none"
                    value=""
                  />
                </div>
              </div>
            ) : (
              ''
            )}

            <div className="flex w-full">
              <div className="max-w-[350px] flex justify-center items-center relative w-full">
                <input
                  type="text"
                  aria-label="search"
                  placeholder="Your school"
                  className="text-[16px] leading-[24px] p-[8px_36px_8px_20px] w-full border-0 rounded-[43px] text-[#9e9e9e] text-xl max-w-none outline-none"
                  value=""
                />
              </div>
            </div>
          </div>
          <button className="hidden"></button>
        </div>
      </div>
    </div>
  );
};

export default HeaderSearch;

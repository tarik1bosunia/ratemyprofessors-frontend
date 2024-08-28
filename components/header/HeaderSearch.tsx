"use client";
import { useState } from "react";
import { PiCaretDownLight } from "react-icons/pi";

import { usePathname  } from "next/navigation"
import { useParams } from "next/navigation";

import {
  SearchSchoolIconWhite,
  SearchProfessorIconWhite,
} from "@/components/common/icons";
import { useTranslations } from "next-intl";
import { SearchType } from "@/types";

const HeaderSearch = () => {
  const t = useTranslations('SEARCH')
  const  {searchtype: search_type} = useParams<{searchtype:string}>()
  const [search, setSearch] = useState<SearchType>(search_type as SearchType);
  console.log("search:: ", search)

  const [isOpenSearchTitleDropdown, setIsOpenSearchTitleDropdown] = useState(false);

  const handleDropdown = () => {
    setIsOpenSearchTitleDropdown((prev) => !prev);
  };
  const getSearchIcon = () => {
    if (search === "schools") return <SearchSchoolIconWhite />;
    return <SearchProfessorIconWhite />;
  };

  const getChangeSearchViewButtonText = () => {
    if (search === "schools")return t('SCHOOL_VIEW');
    return t('PROFESSOR_VIEW');
  };




  return (
    <div className="w-full">
      <div className="flex items-center w-full my-0 mx-auto">
        <div className="relative">
          {
            <button
              className="teacher_school_toggle_button flex items-center bg-none border-0 text-white cursor-pointer mr-[14px] outline-none relative"
              type="button"
              role="button"
              title="Teacher School Toggle Button"
              onClick={handleDropdown}
            >
              <span className="mr-[5px]">{getSearchIcon()}</span>
              <div className="text-white text-[18px] leading-[21px] pr-[10px]">
                {getChangeSearchViewButtonText()}
              </div>
              <PiCaretDownLight className="w-6 h-6" />
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
                  href={search === 'schools' ? '/search/professors/?q=' : '/search/schools/?q='}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                  role="menuitem"
                >
                  {
                      search === "schools" ?  t('PROFESSOR_VIEW') : t('SCHOOL_VIEW')
                  }
                </a>
              </div>
            </div>
          )}
        </div>

        <div className="w-full max-w-[795px]">
          <div className="flex items-center my-0 mx-auto max-w-[746px]">
            {search === "professors" ? (
              <div className="relative w-full">
                <div></div>
                <div className="max-w-[350px] flex justify-center items-center relative w-full">
                  <input
                    type="text"
                    aria-label="search"
                    placeholder="Professor Name"
                    className="text-[16px] leading-[24px] p-[8px_36px_8px_20px] w-full border-0 rounded-[43px] text-[#9e9e9e] text-xl max-w-none outline-none"
                    value=""
                    onChange={() => {}}
                    
                  />
                </div>
              </div>
            ) : (
              ""
            )}

            <div className="flex w-full">
              <div className="max-w-[350px] flex justify-center items-center relative w-full">
                <input
                  type="text"
                  aria-label="search"
                  placeholder="Your school"
                  className="text-[16px] leading-[24px] p-[8px_36px_8px_20px] w-full border-0 rounded-[43px] text-[#9e9e9e] text-xl max-w-none outline-none"
                  value=""
                  onChange={() => {}}
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

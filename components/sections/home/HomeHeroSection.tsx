'use client';
import { PROFESSOR_CHANGE_SEARCH_VIEW_BUTTON_TEXT, SCHOOL_CHANGE_SEARCH_VIEW_BUTTON_TEXT, SEARCH_PROFESSOR_PLACEHOLDER, SEARCH_SCHOOL_PLACEHOLDER } from '@/constants'
import React, { useState } from "react";
import { useRouter } from 'next/navigation';
import { BigRMPLogoBlack } from "@/components/common/logo";
import styles from "./hoemehero.module.css";
import {SearchSchoolIcon, SearchProfessorIcon} from '@/components/common/icons'

const HomeHeroSection = () => {
  const [view, setView] = useState("school");
  const [searchQuery, setSearchQuery] = useState('');
  const router = useRouter();

  const toggleSearchView = () => {
    setView((state) => (state === "school" ? "professor" : "school"));
  };

  const getSearchTitle = () => {
    if (view === "school")
      return (
        <>
          Find a <strong className="font-bold">professor</strong>
        </>
      );
    if (view === "professor")
      return (
        <>
          Enter your <strong className="font-bold">school</strong> to get started{" "}
        </>
      );
  };

  const getSearchIcon = () => {
    if (view === "school") return (<SearchSchoolIcon />);
    return ( <SearchProfessorIcon />);
  };

  const getSearchInputPlaceholder = () => {
    if (view === "school") return SEARCH_SCHOOL_PLACEHOLDER;
    return SEARCH_PROFESSOR_PLACEHOLDER;
  };

  const getChangeSearchViewButtonText = () => {
    if (view === "school") return SCHOOL_CHANGE_SEARCH_VIEW_BUTTON_TEXT;
    return PROFESSOR_CHANGE_SEARCH_VIEW_BUTTON_TEXT;  
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let searchtype;
    view === "school" ? searchtype = 'schools' : searchtype = 'professors'
    if (searchQuery.trim()) {
      router.push(`/search/${searchtype}?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className={`${styles.bgHero} w-full`}>
      <div className="flex flex-col mb-[36px] items-center">
        <BigRMPLogoBlack />
      </div>
      <div className={styles.gst} id="search_title">
        {getSearchTitle()}
      </div>
      <div className={`${styles.search} relative`} id="search">
        <div
          id="search-icon"
          className="new_search_icon flex items-center top-[17px] left-[27px] absolute w-fit z-10"
        >
          {getSearchIcon()}
        </div>
        <div className="search_input_container relative w-full max-w-[545px]">
          <form onSubmit={handleSearch}>
            <input
              id="search_input"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="search"
              placeholder={getSearchInputPlaceholder()}
              className="search_input border-none text-[20px] h-[56px] mb-[19px] max-w-[545px] outline-none px-16 py-4 w-full rounded-full"

            />
          </form>
        </div>
      </div>
      <div className="flex flex-row justify-center">
        <button
          className="text-white font-bold cursor-pointer"
          id="change-view-button"
          onClick={toggleSearchView}
        >
          {getChangeSearchViewButtonText()}
        </button>
      </div>
    </div>
  );
};

export default HomeHeroSection;

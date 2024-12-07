"use client";

import { CiApple } from "react-icons/ci";

import {
  PROFESSOR_SEARCH_API,
  PROFESSOR_SIGN_UP_MODAL_NAME,
  PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME,
} from "@/constants";
import { useModal } from "@/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useSearchProfessorsQuery } from "@/redux/services/public";
import { useProfessor } from "@/contexts/ProfessorContext";
import { Professor } from "@/types";
import { usePagination } from "@/hooks/pagination";

export default function ProfessorSignUpSearchModalContent() {
  const { close: closeprofessorSignUpSearchModal } = useModal(
    PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME
  );
  const { setSelectedProfessor } = useProfessor(); // Use context to store the selected professor
  const { open: openProfessorSignUpModal } = useModal(
    PROFESSOR_SIGN_UP_MODAL_NAME
  );

  const handleProfessorSignUp = (professor: any) => {
    setSelectedProfessor(professor); // Store selected professor in context
    closeprofessorSignUpSearchModal();
    // console.log("cloed professor signup search modal")
    openProfessorSignUpModal();
  };

  const handleSkipforNow = () => {
    closeprofessorSignUpSearchModal();
  };

  const [query, setQuery] = useState("");
  const router = useRouter();

  const {
    totalCount,
    results: professors,
    isLoading,
    isError,
    lastSchoolElementRef,
  } = usePagination<Professor>({
    apiUrl: PROFESSOR_SEARCH_API,
    query: query,
    fetchFunction: useSearchProfessorsQuery,
  });


  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  if (isError) {
    return <div>An error occurred while fetching data!!!</div>;
  }


  return (
    <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
      <div className="inline-flex justify-center mt-1 text-3xl">
        <div className="font-black mr-2 text-3xl">Professor</div>
        Sign Up
      </div>
      <div className="h-full w-full text-ceter">
        <form className="mt-6">
          <div className="error-container"></div>
          <div className="relative text-left">
            <div className="flex flex-col items-start justify-end relative mt-2 mb-2 h-auto">
              <div className="flex text-base justify-start ml-0 font-bold">
                Search for your professor profile
              </div>
              <div className="relative w-full">
                <div className="w-full max-w[545px] my-2">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="border border-gray-300 rounded-md text-inherit text-base h-10 outline-none p-3 w-full"
                  />
                  {/* Dropdown with search results */}
                  {query && professors && (
                    <ul className="absolute bg-white border border-gray-300 w-full max-h-60 overflow-y-auto mt-1 rounded-md z-10">
                      {professors.map((professor, index) => {
                        if (professors.length === index + 1) {
                          return (
                            <div ref={lastSchoolElementRef} key={professor.id}>
                              <li
                                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                                onClick={() => {
                                  handleProfessorSignUp(professor);
                                }}
                              >
                                <div className="flex flex-row justify-start gap-2">
                                  <CiApple />
                                  <div className="flex flex-col">
                                    <div>
                                      {professor.first_name}{" "}
                                      {professor.last_name}
                                    </div>
                                    <div>{String(professor.department)}</div>
                                    <div>{professor.name_of_school}</div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          );
                        } else {
                          return (
                            <div key={professor.id}>
                              <li
                                key={professor.id}
                                className="p-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                                onClick={() => {
                                  handleProfessorSignUp(professor);
                                }}
                              >
                                <div className="flex flex-row justify-start gap-2">
                                  <CiApple />
                                  <div className="flex flex-col">
                                    <div>
                                      {professor.first_name}{" "}
                                      {professor.last_name}
                                    </div>
                                    <div>{String(professor.department)}</div>
                                    <div>{professor.name_of_school}</div>
                                  </div>
                                </div>
                              </li>
                            </div>
                          );
                        }
                      })}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex text-base justify-start ml-0 font-medium">
                Can&apos;t find your profile?&nbsp;
                <a
                  href="/add/professor"
                  className="text-base font-bold no-underline text-customBlue"
                >
                  Create one here
                </a>
              </div>
            </div>
          </div>
        </form>
        <div className="absolute bottom-0 left-0 mb-4 w-full text-base text-center">
          Already have an account?
          <button className="text-[rgb(0,85,253)] font-bold leading-inherit ml-[3px] no-underline bg-none border-0 text-inherit m-0 outline-none p-0">
            login
          </button>
        </div>
      </div>
    </div>
  );
}

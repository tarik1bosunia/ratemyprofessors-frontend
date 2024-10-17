'use client'

import { PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME } from "@/constants";
import { useModal } from "@/hooks";
import { useProfessor } from "@/contexts/ProfessorContext";
import { ProfessorSignUpModalForm } from "../forms";
import styles from "./Modal.module.css";

export default function ProfessorSignUpModalContent() {
  const { close: closeprofessorSignUpModal } = useModal(
    PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME
  );
  const handleSkipforNow = () => {
    closeprofessorSignUpModal();
  };


  const { selectedProfessor } = useProfessor();

  return (
    <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
           <div className={`${styles.modalHeader}`}>
                <div className={`font-black mr-2`}>Professor</div>
                Sign Up
            </div>
            <div className="text-left w-full">
                <div className="bg-[#efefef] border border-[#cccccc] rounded-[9px] box-border min-h-[91px] p-[16px]">
                    <div className="text-2xl font-semibold">{selectedProfessor.first_name} {selectedProfessor.last_name}</div>
                    <div className="text-[#9e9e9e] text-[18px] leading-[21px] font-medium mt-[4px]">{selectedProfessor.name_of_school}</div>
                </div>
            </div>
            <ProfessorSignUpModalForm />
            <div className="m-4">
                By clicking &apos;Continue&apos; you agree to the Terms of Use and our Privacy RateTeach is designed for and targeted to BD audiences and is governed by and operated in accordance with BD laws.
            </div>
            <div className="text-base mb-4 w-full">
                Already have an account?
                <button className="text-[#0055fd] font-bold leading-inherit ml-[3px] no-underline bg-none border-0  m-0 outline-none p-0">Login</button>
            </div>
    </div>
  );
}

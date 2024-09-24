'use client'

import useModal from "@/hooks/use-modal";
import { GoogleIcon } from "../common/icons";
import { CheckEmailModalForm } from "../forms";
import styles from "./Modal.module.css";
import { GoogleAuth } from "@/components/common";
import { CHECK_EMAIL_MODAL_NAME, PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME } from "@/constants";


declare global {
  interface Window {
    google: any;
  }
}

// {
//   "iss": "https://accounts.google.com",
//   "azp": "573678907891-8b1nrjprjdqhjgoqkmnseu81jt033ohe.apps.googleusercontent.com",
//   "aud": "573678907891-8b1nrjprjdqhjgoqkmnseu81jt033ohe.apps.googleusercontent.com",
//   "sub": "105168924894714258917",
//   "email": "bosuniamdtarik005@gmail.com",
//   "email_verified": true,
//   "nbf": 1722305208,
//   "name": "MD Tarik Bosunia",
//   "picture": "https://lh3.googleusercontent.com/a/ACg8ocIYXBvT5IQ6peB5uix49zrisSsbSeQl9vXat_M8w4X-_jJKvIHJ=s96-c",
//   "given_name": "MD Tarik",
//   "family_name": "Bosunia",
//   "iat": 1722305508,
//   "exp": 1722309108,
//   "jti": "70886f8973c48c734859040c1eab2e50dc36b506"
// }

export default function CheckEmailModal() {
  const { open: openProfessorSignUpSearchModal } = useModal(PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME);
  const { close: closeCheckemailModal } = useModal(CHECK_EMAIL_MODAL_NAME);
  const handleProfessorSignUp =() => {
    closeCheckemailModal()
    openProfessorSignUpSearchModal()
  } 
  return (
      <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
        <div className={`${styles.modalHeader}`}>
          <div className="font-black mr-2">Student</div>
          Sign Up
        </div>
        <div className={`${styles.professorSignup}`}>
          Are you a professor?
          <button role="button" className="" type="button" onClick={handleProfessorSignUp}>
            Sign up here
          </button>
        </div>

        <button className={`${styles.googleAuthButton}`} type="submit">
          <div className="h-6 pr-2">
            <GoogleIcon />
          </div>
          Sign up with Google
        </button>


        

        <GoogleAuth />


        <div className="flex flex-row mt-6">
          <div className={`${styles.line}`}></div>
          <div className="text-[16px] m-2 min-w-[156px]">
            Or sign up with email
          </div>
          <div className={`${styles.line}`}></div>
        </div>
        <CheckEmailModalForm />

        <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
          Rate My Professors is designed for and targeted to U.S. audiences and
          is governed by and operated in accordance with U.S. laws.
        </div>
      </div>

  );
}

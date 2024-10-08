'use client'

import useModal from "@/hooks/use-modal";
import { CheckEmailModalForm } from "../forms";
import styles from "./Modal.module.css";
import { GoogleAuth } from "@/components/common";
import { CHECK_EMAIL_MODAL_NAME, LOGIN_MODAL_NAME, PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME, SITE_NAME } from "@/constants";
import { useTranslations } from "next-intl";


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
  const { open: openLoginModal } = useModal(LOGIN_MODAL_NAME);
  const t = useTranslations("Modals.CheckEmail")
  const handleProfessorSignUp =() => {
    closeCheckemailModal()
    openProfessorSignUpSearchModal()
  } 
  const handleLoginClick = () =>{
    closeCheckemailModal()
    openLoginModal()
  }

  return (
      <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
        <div className="inline-flex justify-center  text-3xl">
          <div className="font-black mr-2 text-3xl">Student</div>
          {t('TITLE')}
        </div>
        <div className={`${styles.professorSignup}`}>
          {t('SUBTITLE')}
          <button role="button" className="" type="button" onClick={handleProfessorSignUp}>
          {t('SUBTITLE_BUTTON')}
          </button>
        </div>


        <GoogleAuth />


        <div className="flex flex-row mt-6">
          <div className={`${styles.line}`}></div>
          <div className="text-[16px] m-2 min-w-[156px]">
            {t("SIGN_UP_WITH_EMAIL")}
          </div>
          <div className={`${styles.line}`}></div>
        </div>
        <CheckEmailModalForm />

        <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
         {SITE_NAME} {t("TERMS_CONDITIONS")}
        </div>
        <div className="flex justify-center text-base mt-6">
          {t("ALREADY_ACCOUNT")}
          <button onClick={handleLoginClick} className="text-[rgb(0,85,253)] text-[16px] font-bold leading-inherit ml-[3px] no-underline">{t("LOGIN_BUTTON")}</button>
        </div>
      </div>

  );
}

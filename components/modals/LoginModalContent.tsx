
import { LoginModalForm } from '@/components/forms'
import { useModal } from '@/hooks';
import { CHECK_EMAIL_MODAL_NAME, LOGIN_MODAL_NAME, SITE_NAME } from '@/constants';
import { GoogleAuth } from '@/components/common';
import { useTranslations } from 'next-intl';

const LoginModalContent = () => {
    const { open: openCheckemailModal } = useModal(CHECK_EMAIL_MODAL_NAME);
    const { close: closeLoginModal } = useModal(LOGIN_MODAL_NAME);
    const t = useTranslations("Modals.Login")
    const handleSignUp = () =>{
        closeLoginModal()
        openCheckemailModal()
      }
  return (
        <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
            <div className="inline-flex justify-center  text-3xl">
                <div className="font-black mr-2 text-3xl"> {t("TITLE")}</div>
               
            </div>

            <GoogleAuth />

            <div className="flex flex-ro mt-6">
                <div className="line"></div>
                <div className="text-[16px] m-2 min-w-[156px]">{t('LOGIN_WITH_EMAIL')}</div>
                <div className="line"></div>
            </div>

            <LoginModalForm />

            <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
            {SITE_NAME} {t("TERMS_CONDITIONS")}
            </div>
            <div className="flex justify-center text-base mt-6">
            {t('DONOT_HAVE_ACCOUNT')}
          <button onClick={handleSignUp} className="text-[rgb(0,85,253)] text-[16px] font-bold leading-inherit ml-[3px] no-underline">{t("SIGNUP_BUTTON")}</button>
        </div>
        </div>

  )
}

export default LoginModalContent
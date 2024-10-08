
import { LoginModalForm } from '@/components/forms'
import { useModal } from '@/hooks';
import { CHECK_EMAIL_MODAL_NAME, LOGIN_MODAL_NAME } from '@/constants';
import { GoogleAuth } from '@/components/common';

const LoginModalContent = () => {
    const { open: openCheckemailModal } = useModal(CHECK_EMAIL_MODAL_NAME);
    const { close: closeLoginModal } = useModal(LOGIN_MODAL_NAME);
    const handleSignUp = () =>{
        closeLoginModal()
        openCheckemailModal()
      }
  return (
        <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
            <div className="inline-flex justify-center  text-3xl">
                <div className="font-black mr-2 text-3xl"> Login</div>
               
            </div>

            <GoogleAuth />

            <div className="flex flex-ro mt-6">
                <div className="line"></div>
                <div className="text-[16px] m-2 min-w-[156px]">Or sign up with email</div>
                <div className="line"></div>
            </div>

            <LoginModalForm />

            <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
                Rate My Professors is designed for and targeted to U.S. audiences and is governed by and operated in accordance with U.S. laws.
            </div>
            <div className="flex justify-center text-base mt-6">
            Don&apos;t have an account?
          <button onClick={handleSignUp} className="text-[rgb(0,85,253)] text-[16px] font-bold leading-inherit ml-[3px] no-underline">Sign Up</button>
        </div>
        </div>

  )
}

export default LoginModalContent
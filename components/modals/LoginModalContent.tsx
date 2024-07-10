
import { LoginModalForm } from '@/components/forms'
import styles from "./Modal.module.css";
import { GoogleIcon } from '@/components/common/icons';

const LoginModalContent = () => {
  return (

        <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
            <div className={`${styles.modalHeader}`}>
                <div className={`font-black mr-2`}>Student</div>
                Login
            </div>
            <div className={`${styles.professorSignup}`}>
                Are you a professor?
                <button role="button" className="" type="button">Sign up here</button>
            </div>

            <button className={`${styles.googleAuthButton}`} type="submit">
                <div className="h-6 pr-2">
                <GoogleIcon />
                </div>Sign up
                with Google
            </button>

            <div className="flex flex-ro mt-6">
                <div className="line"></div>
                <div className="text-[16px] m-2 min-w-[156px]">Or sign up with email</div>
                <div className="line"></div>
            </div>

            <LoginModalForm />

            <div className="text-xs my-4 mx-0 w-full max-w-[343px]">
                Rate My Professors is designed for and targeted to U.S. audiences and is governed by and operated in accordance with U.S. laws.
            </div>
        </div>

  )
}

export default LoginModalContent
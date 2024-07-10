import { GoogleIcon } from "../common/icons";
import { CheckEmailModalForm } from "../forms";
import styles from "./Modal.module.css";


export default function CheckEmailModal() {
  
  return (
      <div className="flex flex-col my-0 mx-auto py-[48px] px-[116px]">
        <div className={`${styles.modalHeader}`}>
          <div className="font-black mr-2">Student</div>
          Sign Up
        </div>
        <div className={`${styles.professorSignup}`}>
          Are you a professor?
          <button role="button" className="" type="button">
            Sign up here
          </button>
        </div>

        <button className={`${styles.googleAuthButton}`} type="submit">
          <div className="h-6 pr-2">
            <GoogleIcon />
          </div>
          Sign up with Google
        </button>

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

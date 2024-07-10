import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useCheckEmailMutation } from "@/redux/fetures/authApiSlice";

import { useModal } from "@/hooks";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { setEmail } from "@/redux/fetures/modalSlice";
import { RootState } from "@/redux/store";



export default function useCheckEmail(){
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [checkemail, {isLoading}] = useCheckEmailMutation()
    const emailFromState = useAppSelector((state: RootState) => state.modals.email); // assuming email is stored in modals state


    const [formData, setformData] = useState({
        email:  emailFromState || '',
    })

    const {email} = formData

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        setformData({...formData, [name]: value})
    }

   const {close: closeCheckEmailModal} =  useModal('checkemailModal')
   const {open: openRegistrationModal} =  useModal('registrationModal')

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        checkemail({email})
        .unwrap()
        .then(() => {
            // Dispatch setEmail action to store email in Redux state
             dispatch(setEmail(email || ''));

            // close check email modal
            closeCheckEmailModal()
            //  open sign up modeal
            openRegistrationModal()
        })
        .catch(() => {
            toast.error("Already have an account with this email or invalid email")
        })

    }

    return {
        email,
        isLoading,
        onChange,
        onSubmit,
        setformData
    }
}
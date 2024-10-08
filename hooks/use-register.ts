"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useRegistrationMutation } from "@/redux/fetures/authApiSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
import useModal from "./use-modal";
import { setEmail } from "@/redux/fetures/modalSlice";
import { setAuth } from "@/redux/fetures/authSlice";




export default function useRegister(){
    const dispatch = useAppDispatch()
 
    const emailFromState = useAppSelector((state: RootState) => state.modals.email); // assuming email is stored in modals state

    const {open: openCheckEmailModal} =  useModal('checkemailModal')
    const {close: closeRegistrationModal} =  useModal('registrationModal')
    const {open: openAddDetaisModal} = useModal('adddetailsModal')

    const [register, {isLoading}] = useRegistrationMutation()

    const [formData, setformData] = useState({
        email: emailFromState || '' ,
        password: '',
    })

    const {email, password} = formData

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        setformData({...formData, [name]: value})
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        register({email, password})
        .unwrap()
        .then((data) => {
          

            // Dispatch setEmail action to store email in Redux state
            dispatch(setEmail(''));

            // close registration modal
            closeRegistrationModal()
            const {access, refresh} = data.token
            dispatch(setAuth({access, refresh}))
            // console.log(data.token);
            // open  add few More details modal
            openAddDetaisModal()
            toast.success("Please check your email to verify your account!")
           
        })
        .catch(() => {
            toast.error("Registration Failed!")
        })

    }
    

    const handleBack = () => {
        closeRegistrationModal()
        openCheckEmailModal()
        // set email from state in check email form
        // setCheckEamilModalformData({email: emailFromState || ''})
    };

    return {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
        handleBack,
    }
}
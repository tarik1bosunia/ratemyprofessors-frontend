"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useRegistrationMutation } from "@/redux/fetures/authApiSlice";

import { setAuth } from "@/redux/fetures/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import useModal from "./use-modal";
import { PROFESSOR_SIGN_UP_MODAL_NAME } from "@/constants";


export default function useLogin(){
    const {close: closeProfessorSignUpModal} = useModal(PROFESSOR_SIGN_UP_MODAL_NAME)
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [register, {isLoading}] = useRegistrationMutation()
    

    const [formData, setformData] = useState({
        email: '' ,
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
            
           closeProfessorSignUpModal();

           const {refresh, access}  = data.token
    
           dispatch(setAuth({refresh, access}))
           toast.success("Registration Successfull!")
           router.push('/account/profile')
        })
        .catch(() => {
            toast.error("Registration Failed!")
        })

    }

    return {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    }
}
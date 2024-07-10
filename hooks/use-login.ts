import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";

import { toast } from "react-toastify";

import { useLoginMutation } from "@/redux/fetures/authApiSlice";

import { setAuth } from "@/redux/fetures/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import useModal from "./use-modal";


export default function useLogin(){
    const {close: closeLoginModal} = useModal('loginModal')
    const router = useRouter()
    const dispatch = useAppDispatch()

    const [login, {isLoading}] = useLoginMutation()

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
        login({email, password})
        .unwrap()
        .then((data) => {
            
           closeLoginModal();

           const {refresh, access}  = data.token
    
           dispatch(setAuth({refresh, access}))
           toast.success("Login Successfull!")
           router.push('/dashboard')
        })
        .catch(() => {
            toast.error("Login Failed!")
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
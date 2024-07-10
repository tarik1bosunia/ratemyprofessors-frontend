'use client';
import { ModalForm } from "@/components/forms"
import { useCheckEmail, useModal  } from "@/hooks";
import { setEmail } from "@/redux/fetures/modalSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function CheckEmailModalForm(){
    const dispatch = useAppDispatch()
    const {
        email,
        isLoading,
        onChange,
        onSubmit,
    } = useCheckEmail()


    const config = [
        {
            labelText: "Email",
            labelId: "email",
            type: "email",
            value: email,
            required: true,
        },
    ]
 

      
    return (
        
        <ModalForm 
            config = {config} 
            isLoading = {isLoading}
            btnText = "Continue"
            onChange = {onChange}
            onSubmit = {onSubmit}
        />

    )
}
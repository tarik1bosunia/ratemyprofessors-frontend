'use client';

import { ModalForm } from "@/components/forms"
import { useProfessorSignup  } from "@/hooks";

export default function ProfessorSignUpModalForm(){
       
    const {
        email,
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useProfessorSignup()

    const config = [
        {
            labelText: "Email",
            labelId: "email",
            type: "email",
            value: email,
            required: true,
        },
        {
            labelText: "Password",
            labelId: "password",
            type: "password",
            value: password,
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
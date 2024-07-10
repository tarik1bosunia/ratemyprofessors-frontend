'use client';
import { ModalForm } from "@/components/forms"
import { useRegister  } from "@/hooks";


export default function RegistrationModalForm(){
   
    const {
        password,
        isLoading,
        onChange,
        onSubmit,
    } = useRegister()

    const config = [
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
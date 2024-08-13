'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAddDetailsMutation } from "@/redux/fetures/authApiSlice";
import { useModal } from "@/hooks";



export default function useAddDetails(){
    const [addDetails, {isLoading}] = useAddDetailsMutation()
    const [formData, setformData] = useState({
        first_name: '',
        last_name: '',
        school: '',
        field_of_study: '',
    })

    const {first_name, last_name, school, field_of_study} = formData

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        setformData({...formData, [name]: value})
    }

   const {close: closeAddDetailsModal} =  useModal('addDetailsModal')

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addDetails({first_name, last_name, school, field_of_study})
        .unwrap()
        .then(() => {

            // close add detailsModal
            closeAddDetailsModal()
        })
        .catch(() => {
            toast.error("Already have an account with this email or invalid email")
        })

    }

    return {
        first_name,
        last_name,
        school,
        field_of_study,
        isLoading,
        onChange,
        onSubmit,
        setformData
    }
}
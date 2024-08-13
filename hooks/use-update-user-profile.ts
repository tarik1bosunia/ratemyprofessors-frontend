"use client"
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAddDetailsMutation } from "@/redux/fetures/authApiSlice";



export default function useAddDetails(){
    const [addDetails, {isLoading}] = useAddDetailsMutation()
    const [formData, setformData] = useState({
        first_name: '',
        last_name: '',
        school: '',
        field_of_study: '',
        expected_year_of_graduation: '',
    })

    const {first_name, last_name, school, field_of_study, expected_year_of_graduation} = formData

    const onChange = (event:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        setformData({...formData, [name]: value})
    }

    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        addDetails({first_name, last_name, school, field_of_study, expected_year_of_graduation})
        .unwrap()
        .then(() => {

            // show updated information with toast success
            toast.success("profile updated successfully!")
            
   
        })
        .catch(() => {
            toast.error("Update Failed")
           
        })

    }

    return {
        first_name,
        last_name,
        school,
        field_of_study,
        isLoading,
        expected_year_of_graduation,
        onChange,
        onSubmit,
        setformData
    }
}
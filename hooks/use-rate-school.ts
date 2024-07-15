'use client'
import { useRateSchoolMutation } from "@/redux/fetures/authApiSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function useRatingSchool(id: string)
{
    const router = useRouter()
    const [rateSchool, {isLoading}] = useRateSchoolMutation()
    const [formData, setFormData] = useState({
        reputation: '',
        facilites: '',
        internet: '',
        food: '',
        clubs: '',
        social: '',
        happiness: '',
        safety: '',
        comment: ''
    })
    const { reputation, facilites, internet, food, clubs, social, happiness, safety, comment} = formData

    const onChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target; 
        setFormData({...formData, [name]: value})
    }


    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // check user is authenticated or not if not redirect to login
        // router.push(`add/school-rating/success/${id}`)ll

        rateSchool({reputation, facilites, internet, food, clubs, social, happiness, safety, comment, id})
        .unwrap()
        .then(() => {
 
            toast.success("rate school successfull!")
        })
        .catch(() => {
            toast.error("rate school Failed!")
        })

    }
    const [submitable, setSubmitable] = useState(false);
    useEffect(() => {
        // Check if all fields are filled
        const allFieldsFilled = Object.values(formData).every(field => field.trim() !== '');
        setSubmitable(allFieldsFilled);
    }, [formData]);

    return {
        reputation, facilites, internet, food, clubs, social, happiness, safety, comment,
        onSubmit, onChange, setFormData, submitable, isLoading
    }
}
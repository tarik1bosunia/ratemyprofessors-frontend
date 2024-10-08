'use client'
import { School } from "@/types";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAddSchoolMutation } from "@/redux/fetures/authApiSlice";

import { useGetCountriesQuery, useGetStatesByCountryQuery } from "@/redux/services/apiSlice";
import useModal from "@/hooks/use-modal";
import { LOGIN_MODAL_NAME } from "@/constants";

export default function useAddSchool() {
  const {open: openLoginModal} =  useModal(LOGIN_MODAL_NAME)

  const initialFormData: School = {
    name_of_school: '',
    school_website: '',
    location: '',
    state: 0,
    country: 0,
    terms_privacy: false,
  };


  const [formData, setFormData] = useState<School>(initialFormData);

  const {
    name_of_school,
    school_website,
    location,
    state,
    country,
    terms_privacy
  } = formData;

  const { data: countries = [], isLoading: countriesLoading } = useGetCountriesQuery();
  const { data: states = [], isLoading: statesLoading } = useGetStatesByCountryQuery(Number(country));
  const [addSchool, { isLoading }] = useAddSchoolMutation();

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedCountry = Number(event.target.value);
    setFormData({ ...formData, country: selectedCountry, state: 0 });
  };

  const handleStateChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedState = Number(event.target.value);
    setFormData({ ...formData, state: selectedState });
  };
  

  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = event.target;
    if (event.target instanceof HTMLInputElement && type === 'checkbox') {
      setFormData({ ...formData, [name]: event.target.checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if not logged in open join rmp family modal
    console.log("add school form data: ", formData)
    addSchool({
      name_of_school,
      school_website,
      location,
      state,
      country,
      terms_privacy
    })
      .unwrap()
      .then(() => {
        setFormData(initialFormData)
        toast.success("School added successfully!");
      })
      .catch((error) => {
        toast.error("Failed to add school!");
        if (error.status === 401) { // Check if the error indicates unauthorized access
          openLoginModal(); // Open the login modal
        } 
        
      });
  };

  
  return {
    name_of_school,
    school_website,
    location,
    state,
    country,
    terms_privacy,
    isLoading,
    onChange,
    handleCountryChange,
    handleStateChange,
    onSubmit,
    countries,
    states,
    countriesLoading,
    statesLoading,
  };
}



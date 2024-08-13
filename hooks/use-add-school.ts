'use client'
import { School } from "@/types";
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
import { useAddSchoolMutation } from "@/redux/fetures/authApiSlice";

import { useGetCountriesQuery, useGetStatesByCountryQuery } from "@/redux/services/apiSlice";

export default function useAddSchool() {


  const [formData, setFormData] = useState<School>({
    name_of_school: '',
    school_website: '',
    location: '',
    state: 0,
    country: 0,
    termsPrivacy: false,
  });

  const {
    name_of_school,
    school_website,
    location,
    state,
    country,
    termsPrivacy
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
    addSchool({
      name_of_school,
      school_website,
      location,
      state,
      country,
      termsPrivacy
    })
      .unwrap()
      .then(() => {
        toast.success("School added successfully!");
      })
      .catch(() => {
        toast.error("Failed to add school!");
      });
  };

  
  return {
    name_of_school,
    school_website,
    location,
    state,
    country,
    termsPrivacy,
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



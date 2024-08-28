'use client'
import Image from "next/image";
import { useState } from "react";
import {ProfileFormInput} from '@/components/account'
import { useUpdateUserProfile } from "@/hooks"; // Adjust the import path if needed
import { useRetrieveUserQuery } from "@/redux/services/apiSlice";

export default function Profile() {
  const {
    first_name,
    last_name,
    school,
    field_of_study,
    isLoading,
    expected_year_of_graduation,
    onChange,
    onSubmit,
    erororLoadingUserProfile,
    userProfileIsLoading
  } = useUpdateUserProfile(); // Adjust the hook name if needed

  const config = [
    {
      label: "First Name",
      value: first_name,
      id: 'first_name'
    },
    {
      label: "Last Name",
      value: last_name,
      id: 'last_name'
    },
    {
      label: "School",
      value: school,
      id: 'school'
    },
    {
      label: "Field Of Study",
      value: field_of_study,
      id: 'field_of_study'
    },
    {
      label: "Expected Year of Graduation",
      value: expected_year_of_graduation,
      id: 'year_of_graduation'
    },
  ]

  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const cancelEditing = () => {
    setIsEditing(false);
  };

  if (userProfileIsLoading) {
    return <div>Loading...</div>;
  }

  if (erororLoadingUserProfile) {
    return <div>Error fetching user profile.</div>;
  }



  return (
    <div className="flex justify-between w-full">
      <div className="profile_form_contianer mt-9 text-left w-full">
        <form role="form" onSubmit={onSubmit}>
          {
            config.map((item, index)=> (
              <ProfileFormInput key={index} label={item.label} disabled={!isEditing} value={item.value} id={item.id} onChange={onChange}/>
            ))
          }
          

          <div className="flex justify-end pr-[100px] w-full">
            <div className="flex flex-col items-center w-[360px]">
              <button
                type="submit"
                className="text-base h-12 mt-14 mb-4 w-60 bg-black border border-blue-600 rounded-full text-white flex justify-center font-bold outline-none px-11 py-2.5 transition-transform duration-200 hover:scale-105 hover:cursor-pointer"
              >
                Save Changes
              </button>
              <button
                onClick={cancelEditing}
                type="button"
                className="bg-none border-0 cursor-pointer inline-block font-bold outline-none text-base my-3.5"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="profile_edit_container relative right-0 top-0">
        <button
          onClick={startEditing}
          className="flex justify-end mt-6 w-full whitespace-nowrap text-sm font-sans font-bold items-center bg-none border-0 cursor-pointer outline-none p-0"
        >
          <Image
            priority
            className="mr-[11px]"
            src="/icons/edit_icon.svg" // Ensure the path is correct
            alt="Edit Icon"
            width={50}
            height={50}
          />
          <span className="font-bold my-0 mx-[5px]">Edit</span>
        </button>
      </div>
    </div>
  );
}

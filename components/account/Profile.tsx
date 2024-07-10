'use client'
import Image from "next/image";

import EditIcon from "@/public/icons/edit_icon.svg";
import { useState } from "react";


export default function Profile() {
    const [isEditing, setIsEditing] = useState(false);

    const startEditing = () =>{
        setIsEditing(true)
    }
    const cancelEditing = () => {
        setIsEditing(false)
    }

  return (
    <div className="flex justify-between w-full">
      <div className="profile_form_contianer mt-9 text-left w-full">
        <form role="form">
          {/* First Name Field */}
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
              value="xxxxxxxxx"
            />
          </div>

          {/* Last Name Field */}
          <div className="mb-4">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
              value="cvv"
            />
          </div>

          {/* School Field */}
          <div className="mb-4">
            <label
              htmlFor="school"
              className="block text-sm font-medium text-gray-700"
            >
              School
            </label>
            <div className="relative mt-1">
              <input
                type="text"
                disabled={!isEditing}
                aria-label="search"
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
                value=""
              />
            </div>
          </div>

          {/* Field of Study */}
          <div className="mb-4">
            <label
              htmlFor="major"
              className="block text-sm font-medium text-gray-700"
            >
              Field of Study
            </label>
            <input
              id="major"
              name="major"
              type="text"
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
              value=""
            />
          </div>

          {/* Expected Year of Graduation */}
          <div className="mb-4">
            <label
              htmlFor="graduationYear"
              className="block text-sm font-medium text-gray-700"
            >
              Expected Year of Graduation
            </label>
            <input
              id="graduationYear"
              name="graduationYear"
              type="text"
              disabled={!isEditing}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-gray-700 bg-gray-100"
              value="2031"
            />
          </div>
          <div className="flex justify-end pr-[100px] w-full">
            <div className="flex flex-col items-center w-[360px]">
                <button type="submit" className="text-base h-12 mt-14 mb-4 w-60 bg-black border border-blue-600 rounded-full text-white flex justify-center font-bold outline-none px-11 py-2.5 transition-transform duration-200 hover:scale-105 hover:cursor-pointer">Save Changes</button>
                <button onClick={cancelEditing} type="button" className="bg-none border-0 cursor-pointer inline-block font-bold outline-none text-base my-3.5">Cancel</button>
            </div>

          </div>
        </form>
      </div>
      <div className="profile_edit_container relative right-0 top-0">
        <button onClick={startEditing} className="flex justify-end mt-6 w-full whitespace-nowrap text-sm font-sans font-bold items-center bg-none border-0 cursor-pointer outline-none p-0">
          <Image
            priority
            className="mr-[11px]"
            src={EditIcon}
            alt="Edit Icon"
    
          />
          <span className="font-bold my-0 mx-[5px]">Edit</span>
        </button>
      </div>
    </div>
  );
}

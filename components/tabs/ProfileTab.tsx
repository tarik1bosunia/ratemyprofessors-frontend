// components/tabs/ProfileTab.tsx
'use client'
import { useState } from "react";
import FormField from "@/components/account/FormField";

const ProfileTab = () => {
  const [isEditMode, setIsEditMode] = useState(false);

  const handleEditClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="flex flex-col space-y-4">
      <FormField label="First Name" value="John" disabled={!isEditMode} />
      <FormField label="Last Name" value="Doe" disabled={!isEditMode} />
      <FormField label="School" value="Sample School" disabled={!isEditMode} />
      <FormField label="Field of Study" value="Computer Science" disabled={!isEditMode} />
      <FormField label="Expected Year of Graduation" value="2024" disabled={!isEditMode} />
      <div className="mt-4">
        <button
          onClick={handleEditClick}
          className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          <img src="/static/media/edit.f2a4aa51.svg" alt="Edit Icon" className="mr-2" />
          <span>{isEditMode ? "Save" : "Edit"}</span>
        </button>
      </div>
    </div>
  );
};

export default ProfileTab;

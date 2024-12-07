'use client'
import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
;
import { useAppDispatch } from "@/redux/hooks";
import {Professor} from '@/types'
import { useAddProfessorMutation } from "@/redux/fetures/authApiSlice";
import { useGetDepartmentsQuery } from "@/redux/services/public";
import useModal from "./use-modal";
import { LOGIN_MODAL_NAME } from "@/constants";
import { useTranslations } from "next-intl";

export default function useAddProfessor() {
  const {open: openLoginModal} =  useModal(LOGIN_MODAL_NAME)
  const t = useTranslations('AddProfessorPage.Messages')

  const dispatch = useAppDispatch();

  const { data: departments = [], isLoading: departmentsLoading } = useGetDepartmentsQuery();
  const [addProfessor, { isLoading }] = useAddProfessorMutation();

  const initialFormData: Professor = {
    id: 0,
    name_of_school: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    department: 0,
    directory_listing_of_professor: "",
    terms_privacy: false,
  }

  const [formData, setFormData] = useState<Professor>(initialFormData);

  const {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    terms_privacy,
  } = formData;

  const handleDepartmentChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedDepartment = Number(event.target.value);
    setFormData({ ...formData, department: selectedDepartment });
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
    addProfessor({ ...formData })
      .unwrap()
      .then(() => {
        // if not logged in open join rmp family modal

        // toast.success("Professor added successfully!");

        setFormData(initialFormData)
        toast.success(t("PROFESSOR_ADDED_SUCCESS_MESSAGE"));

      })
      .catch((error) => {
        if (error.status === 401) { // Check if the error indicates unauthorized access
          toast.error(t("PROFESSOR_ADDED_FAILED_MESSAGE_UNAUTHORISED"));
          openLoginModal(); // Open the login modal
        } else{
          toast.error(t("PROFESSOR_ADDED_FAILED_MESSAGE_GENERIC"));
        }
        // toast.error("Failed to add professor!");
      });
  };

  return {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    terms_privacy,
    isLoading,
    onChange,
    handleDepartmentChange,
    onSubmit,
    departments,
    departmentsLoading,
  };
}

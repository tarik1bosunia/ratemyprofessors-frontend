import { useState, ChangeEvent, FormEvent } from "react";
import { toast } from "react-toastify";
;
import { useAppDispatch } from "@/redux/hooks";
import {Professor} from '@/types'
import { useAddProfessorMutation } from "@/redux/fetures/authApiSlice";
import { useGetDepartmentsQuery } from "@/redux/services/apiSlice";



export default function useAddProfessor() {
  const dispatch = useAppDispatch();

  const { data: departments = [], isLoading: departmentsLoading } = useGetDepartmentsQuery();
  const [addProfessor, { isLoading }] = useAddProfessorMutation();

  const [formData, setFormData] = useState<Professor>({
    name_of_school: "",
    first_name: "",
    middle_name: "",
    last_name: "",
    department: 0,
    directory_listing_of_professor: "",
    termsPrivacy: false,
  });

  const {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    termsPrivacy,
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

        toast.success("Professor added successfully!");

      })
      .catch(() => {
        toast.error("Failed to add professor!");
      });
  };

  return {
    name_of_school,
    first_name,
    middle_name,
    last_name,
    department,
    directory_listing_of_professor,
    termsPrivacy,
    isLoading,
    onChange,
    handleDepartmentChange,
    onSubmit,
    departments,
    departmentsLoading,
  };
}

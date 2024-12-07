'use client'
import { useRateProfessorMutation, useRateSchoolMutation } from "@/redux/fetures/authApiSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import type { ProfessorsTag } from "@/types";
import { useGetProfessorsTagsQuery } from "@/redux/services/public";


type FormDataType = {
    course_code: string,
    is_online_course: boolean,
    rating: string,
    difficulty: string,
    is_take_professor_again: boolean | null,
    was_class_taken_for_credit: boolean | null,
    was_use_textbook: boolean | null,
    was_attendance_mandatory: boolean | null,
    grade: string,
    tags: string[],
    comment: string
}


export default function useRateProfessor(id: string)
{

    const router = useRouter()
    const [rateProfessor, {isLoading}] = useRateProfessorMutation()
    const { data: professors_tags = [], isLoading: professorsTagsLoading } = useGetProfessorsTagsQuery();
    const initialFormData: FormDataType = {
        course_code: '',
        is_online_course: false,
        rating: '',
        difficulty: '',
        is_take_professor_again: null,
        was_class_taken_for_credit: null,
        was_use_textbook: null,
        was_attendance_mandatory: null,
        grade: '',
        tags: [],
        comment: ''
    }
    const [formData, setFormData] = useState<FormDataType>(initialFormData)
    const {
        course_code,
        is_online_course,
        rating,
        difficulty,
        is_take_professor_again,
        was_class_taken_for_credit,
        was_use_textbook,
        was_attendance_mandatory,
        grade,
        tags,
        comment,
    } = formData

    const onChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        // console.log(name, ' : ', value)
        // console.log('form data: ', formData)
        
        if (event.target.type === 'radio') {
            handleRadioInputChange(event as ChangeEvent<HTMLInputElement>);
            return
        }
        
    
        setFormData({...formData, [name]: value})

    }

    const handleRadioInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target; 
        setFormData({ ...formData, [name]: value === 'Yes'});
    };

    const handleSingleRadioInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {name, checked} = event.target; 
        setFormData({ ...formData, [name]: checked});
    };


    const handleProfesorsTagChange = (selectedTags: string[]) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            tags: selectedTags,
          }));
    };


    const onSubmit = (event:FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        // check user is authenticated or not if not redirect to login
        // router.push(`add/school-rating/success/${id}`)ll

  
        const tagsAsIntegers = tags.map(tag => parseInt(tag));
        rateProfessor({         
            course_code,
            is_online_course,
            rating: parseInt(rating),
            difficulty: parseInt(difficulty),
            is_take_professor_again,
            was_class_taken_for_credit,
            was_use_textbook,
            was_attendance_mandatory,
            grade,
            tags: tagsAsIntegers,
            comment,
             id
        })
        .unwrap()
        .then(() => {
                    // Reset form data to initial values
        setFormData(initialFormData);
            toast.success("rate professor successfull!")
        })
        .catch(() => {
            toast.error("rate professor Failed!")
        })

    }
    const [submitable, setSubmitable] = useState(false);
    useEffect(() => {
        const validateForm = () => {
            // List all required fields here
            const requiredFields = [
              'course_code',
              'rating',
              'difficulty',
              'is_take_professor_again',
              'comment'
            ];
      
            // Check if all required fields are filled
            const allFieldsFilled = requiredFields.every(field => formData[field as keyof FormDataType]?.toString().trim() !== '');
      
            // Check if tags array has 3 or fewer selected tags
            const tagsValid = formData.tags.length <= 3;
      
            setSubmitable(allFieldsFilled && tagsValid);
          };
      
          validateForm();
    }, [formData]);

    const grades = [
        {
            label: 'A+',
            value: 'A+'
        },
        {
            label: 'A',
            value: 'A'
        },
        {
            label: 'A-',
            value: 'A-'
        },
        {
            label: 'B+',
            value: 'B+'
        },
        {
            label: 'B',
            value: 'B'
        },
        {
            label: 'B-',
            value: 'B-'
        },
        {
            label: 'C+',
            value: 'C+'
        },
        {
            label: 'C',
            value: 'C'
        },
        {
            label: 'C-',
            value: 'C-'
        },
        {
            label: 'D+',
            value: 'D+'
        },
        {
            label: 'D',
            value: 'D'
        },
        {
            label: 'D-',
            value: 'D-'
        },
        {
            label: 'Audit/ No grade',
            value: 'no_grade'
        },
        {
            label: 'Incompele',
            value: 'incompele'
        },
        {
            label: 'Not Yet Sure',
            value: 'not_sure'
        },
        {
            label: 'Rather Not Say',
            value: 'not_say'
        }, 
    ]

    const course_codes = [
        {
            label: "1001",
            value: 0,
        },
        {
            label : "BCH101",
            value: 1
        },
        {
            label : "aggf",
            value: 2
        },
    ]

    return {
        course_code,
        is_online_course,
        rating,
        difficulty,
        is_take_professor_again,
        was_class_taken_for_credit,
        was_use_textbook,
        was_attendance_mandatory,
        grade,
        tags,
        comment,
        onSubmit, onChange, setFormData, submitable, isLoading,
        handleRadioInputChange,
        grades,
        course_codes,
        professors_tags,
        professorsTagsLoading,
        handleProfesorsTagChange,
        handleSingleRadioInputChange
    }
}
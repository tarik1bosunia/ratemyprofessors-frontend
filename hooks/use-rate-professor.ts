'use client'
import { useRateProfessorMutation, useRateSchoolMutation } from "@/redux/fetures/authApiSlice";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import type { ProfessorsTag } from "@/types";
import { useGetProfessorsTagsQuery } from "@/redux/services/apiSlice";


type FormDataType = {
    course_code: string,
    is_online_course: boolean,
    rating: string,
    difficulty: string,
    is_take_professor_again: boolean | null,
    was_class_taken_for_credit: boolean | null,
    was_use_textbook: boolean | null,
    was_attendence_mendatory: boolean | null,
    grade: string,
    tags: string[],
    comment: string
}


export default function useRateProfessor(id: string)
{
    const router = useRouter()
    const [rateProfessor, {isLoading}] = useRateProfessorMutation()
    const { data: professors_tags = [], isLoading: professorsTagsLoading } = useGetProfessorsTagsQuery();
    const [formData, setFormData] = useState<FormDataType>({
        course_code: '',
        is_online_course: false,
        rating: '',
        difficulty: '',
        is_take_professor_again: null,
        was_class_taken_for_credit: null,
        was_use_textbook: null,
        was_attendence_mendatory: null,
        grade: '',
        tags: [],
        comment: ''
    })
    const {
        course_code,
        is_online_course,
        rating,
        difficulty,
        is_take_professor_again,
        was_class_taken_for_credit,
        was_use_textbook,
        was_attendence_mendatory,
        grade,
        tags,
        comment,
    } = formData

    const onChange = (event:ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {name, value} = event.target;
        console.log(name, ' : ', value)
        console.log('form data: ', formData)
        
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
      console.log("formdata: ", formData)
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
            was_attendence_mendatory,
            grade,
            tags: tagsAsIntegers,
            comment,
             id
        })
        .unwrap()
        .then(() => {
 
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

    return {
        course_code,
        is_online_course,
        rating,
        difficulty,
        is_take_professor_again,
        was_class_taken_for_credit,
        was_use_textbook,
        was_attendence_mendatory,
        grade,
        tags,
        comment,
        onSubmit, onChange, setFormData, submitable, isLoading,
        handleRadioInputChange,
        grades,
        professors_tags,
        professorsTagsLoading,
        handleProfesorsTagChange,
        handleSingleRadioInputChange
    }
}
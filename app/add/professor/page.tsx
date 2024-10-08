import AddProfessorForm from "@/components/forms/add/AddProfessorForm";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('AddProfessorPage')
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-white">
      <div className="my-0 mx-auto w-full max-w-[1280px] text-left">
        <div className="text-[42px] leading-[60px] font-poppins font-black dark:text-white">
        {t('ADD_PROFESSOR_TITLE')}
        </div>
        <div className="text-sm text-gray-600 italic font-light dark:text-white">
        {t('ADD_PROFESSOR_SUBTITLE')}
        </div>
        <AddProfessorForm />
      </div>
      
    </div>
  );
}

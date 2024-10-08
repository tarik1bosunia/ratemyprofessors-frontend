import AddSchoolForm from "@/components/forms/add/AddSchoolForm";
import { useTranslations } from "next-intl";

export default function Page() {
  const t = useTranslations('AddSchoolPage')
  return (
    <div className="flex flex-col bg-white text-black">
      <div className="my-0 mx-auto w-full max-w-[1280px] text-left">
        <div className="text-[42px] leading-[60px] font-poppins font-black">
          {t('ADDSCHOOL_TITLE')}
        </div>
        <div className="text-sm text-gray-600 italic font-light">
         {t('ADDSCHOOL_SUBTITLE')}
        </div>
        <AddSchoolForm />
      </div>
      
    </div>
  );
}

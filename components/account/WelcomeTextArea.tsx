'use client'
import { useUpdateUserProfile } from "@/hooks";


const WelcomeTextArea = () => {
  const {
    last_name,
  } = useUpdateUserProfile(); // Adjust the hook name if needed
  return (
    <div className="flex m-auto px-0 pt-32 pb-20 w-[755px]">
      <div className="inline-flex h-[45px] text-3xl font-black">Hey {last_name || 'There'}</div>
    </div>
  )
}

export default WelcomeTextArea
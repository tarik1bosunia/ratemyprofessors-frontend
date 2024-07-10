import Image from "next/image";

type Props = {
    icon: string,
    title: string,
    rating: Number
}



export default function Rating({icon, title, rating}: Props){
    return (
        <div className="flex items-center basis-1/5 h-[34px]">
        <Image src={icon} width={34} height={34} alt="safety-icon"></Image>
        <div className="text-[20px] leading-[24px] ml-[16px] text-left w-[165px]">{title}</div>
        <div className="bg-[#7FF6C3] leading-[24px] min-h-[40px] min-w-[44px] py-[8px] w-[44px] text-[32px] font-poppins font-black">{`${rating}`}</div>
    </div>
    )
}
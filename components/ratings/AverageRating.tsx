import Image from "next/image";

type Props = {
    icon: string,
    title: string,
    rating: number
}



export default function AverageRating({icon, title, rating}: Props){
    
    const getBgColor = () =>{
        if(rating >= 4) return "bg-[#7FF6C3]"
        if(rating >= 3) return "bg-yellow-300"
        if(rating >= 1) return "bg-orange-300"
        return ""
    }

    return (
        <div className="flex items-center basis-1/5 h-[34px]">
        <Image src={icon} width={34} height={34} alt="safety-icon"></Image>
        <div className="text-[20px] leading-[24px] ml-[16px] text-left w-[165px]">{title}</div>
        <div className={`${getBgColor()}  leading-[24px] min-h-[40px] min-w-[44px] py-[8px] w-[44px] text-[32px] font-poppins font-black`}>{`${rating}`}</div>
    </div>
    )
}
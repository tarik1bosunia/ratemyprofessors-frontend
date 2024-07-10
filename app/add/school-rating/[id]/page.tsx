import { RateSchool } from "@/components/ratings";
import RateGenerics from "@/components/ratings/RateGenerics";


export default function Page(){
    return (
        <>
        <div className="fixed w-full h-20 bg-black text-white z-10">Navbar</div>
        <header className="bg-white shadow-[0_4px_4px_rgba(126,126,126,0.25)] h-auto p-6 sticky top-16 w-full z-[60000]">
            <div className="flex justify-between transition-all duration-300 ease-linear my-0 mx-auto xxl:max-w-[1280px] xxl:w-full">
                <div className="flex flex-col">
                    <span className="text-[#7e7e7e] flex text-base font-medium justify-start leading-5 mb-2 max-w-full">school location</span>
                    <div className="flex items-center flex-row text-4xl leading-9 pb-0.5 text-left font-poppins font-black">
                            <div className="text-4xl leading-[38px] overflow-wrap break-word text-left break-words font-poppins font-black">
                                Rate: 
                            </div>
                            <span> Southcentral Ken Community and Technical College</span>
                        
                    </div>
                </div>
            </div>
        </header>
        <div className="my-20"></div>

        <RateSchool/>

        </>
    )
}
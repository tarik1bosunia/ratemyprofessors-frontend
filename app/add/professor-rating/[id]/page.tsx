type Params ={
    params: {
        id: string
    }
}

export default function Page({params}: Params){
    return (
        <div className="bg-white relative text-center">
            <div className="flex flex-col bg-white text-black">
                <header className="bg-white shadow-[0_4px_4px_rgba(126,126,126,0.25)] h-auto p-6 sticky top-16 w-full z-[60000]">
                    <div className="my-0 mx-auto max-w-[1280px] w-full flex justify-between transition-all duration-300 ease-linear">
                        <div className="flex flex-col">
                            <div>
                                <span className="text-[#7e7e7e] flex text-[16px] font-medium justify-start leading-[20px] mb-2 max-w-full"></span>
                                <div className="flex items-center flex-row text-[32px] leading-[36px] pb-0.5 text-left font-poppins font-black">
                                    <div className="text-[36px]  leading-[38px] break-words text-left font-poppins font-black">
                                        <div className="text-[36px] leading-[38px] break-words text-left  font-poppins font-black">Rate:
                                        <span>first name</span> &nbsp;
                                        <span className="whitespace-nowrap">last name</span>
                                    </div>
                                             </div>
                                       
                                </div>
                                <div className="text-base font-bold max-w-full text-left leadin-5">
                                    <div className="flex flex-row">
                                        <span>History</span>
                                        <span>.</span>
                                        <div><a className="text-customGray" href="/school/353">George Washington University</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        </div>
    )
}
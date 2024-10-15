export default function CompareSchoolHeaderSearchBox(){
    return (
        <div className="flex flex-col items-center bg-[#f7f7f7] mx-0 mb-3 mr-[3px] max-w-[444px] min-h-[205px] p-2.5 text-center w-full">
      
        <div className="bg-gray-300 leading-[40px] min-h-[72px] min-w-[44px] p-4 w-[90px] text-[32px] font-poppins font-extrabold">N/A</div>
        
        <div className="text-xs mt-1 font-bold">OVERALL</div>
        

       
        <input type="text" placeholder="we are working on it..." className="placeholder:[rgb(158,158,158)] bg-[rgb(255,255,255)]  text-center h-[36px] rounded-full border border-[rgb(228,228,228)] leading-[36px] mt-[24px] flex text-[20px] max-w-[545px] outline-none w-full"/>
      </div>
    )
}
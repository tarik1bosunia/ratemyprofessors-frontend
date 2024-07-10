
// const styles = <style>
// .rmp_image_box{
//     -webkit-box-align: center;
//     align-items: center;
//     display: flex;
//     flex-direction: column;
//     -webkit-box-pack: justify;
//     justify-content: space-between;
//     max-height: 320px;
// }
// .rmp_image{
//     height: 226px;
//     margin-bottom: 24px;
//     max-width: 100%;
//     width: 340px;
// }
// .rmp_title{
//     font-size: 26px;
//     line-height: 26px;
//     margin: 0px auto;
//     max-width: 300px;
//     text-align: center;
//     font-family: Poppins, sans-serif;
//     font-weight: 700;
// }
// .homepage_pkgds_pink_bacground{
//     left: calc(-575px + 50vw);
//     position: absolute;
//     top: 1020px;
// }
// .homepage_pkgds_blue_bacground{
//     position: absolute;
//     right: calc(-190px + 50vw);
//     top: 300px;
// }
// </style>

const JoinRMPFamilySection = () => {
  return (
<div className="home_page_main overflow-hidden relative">
    <div className="rmp mb-[80px] relative z-40">
        <div className="my-0 mx-auto w-full max-w-[1280px]">
            <div className="mb-[88px] text-center">
                <div className="font-black text-3xl mb-4">Join the RMP Family </div>
                <div className="text-2xl">Love RMP? Let&apos;s make it official.</div>
            </div>
            <div className="flex flex-row mb-[72px] justify-around">
                <div className="rmp_image_box">
                    <img alt="Lady with a pencil" src="images/home_rmp_section/instructional-slide-pencil-lady.svg" className="rmp_image"/>
                    <div className="rmp_title">Manage and edit your ratings</div>
                </div>
    
                <div className="rmp_image_box">
                    <img alt="Person making an anonymous entry" src="images/home_rmp_section/instructional-slide-mystery-lady.svg" className="rmp_image"/>
                    <div className="rmp_title">Your ratings are always anonymous</div>
                </div>
                <div className="rmp_image_box">
                    <img alt="Thumb War" src="images/home_rmp_section/instructional-slide-thumb-war.svg" className="rmp_image"/>
                    <div className="rmp_title">Like or dislike ratings</div>
                </div>
            </div>
        </div>
    </div>
    <img src="{% static 'images/home_rmp_section/pink_background.svg' %}" alt="" className="homepage_pkgds_pink_bacground"/>
    <img src="{% static 'images/home_rmp_section/blue_background.svg' %}" alt="" className="homepage_pkgds_blue_bacground"/>

</div>
  )
}

export default JoinRMPFamilySection
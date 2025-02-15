import {
    JOIN_RMP_FAMILY_SECTION_TITLE,
    JOIN_RMP_FAMILY_SECTION_SUBTITLE,
    JOIN_RMP_FAMILY_SECTION_BG,
    useTranslatedDataJOIN_RMP_FAMILY_SECTION
} from '@/constants'

import Image from 'next/image'
import styles from '@/components/sections/home/join_rmp_family.module.css'
import { useTranslations } from 'next-intl';


const JoinRMPFamilySection = () => {
    const t = useTranslations('HomePage.JOIN_RMP_FAMILY_SECTION');

    const JOIN_RMP_FAMILY_SECTION_IMAGE_BOXES = useTranslatedDataJOIN_RMP_FAMILY_SECTION();
  return (
<div className="home_page_main overflow-hidden relative">
    <div className="rmp mb-[80px] relative z-40">
        <div className="my-0 mx-auto w-full max-w-[1280px]">
            <div className="mb-[88px] text-center">
                <div className="font-black text-3xl mb-4 dark:text-white">{t('JOIN_RMP_FAMILY_SECTION_TITLE')} </div>
                <div className="text-2xl dark:text-white">{t('JOIN_RMP_FAMILY_SECTION_SUBTITLE')}</div>
            </div>
            <div className="flex flex-row mb-[72px] justify-around">
                {
                    JOIN_RMP_FAMILY_SECTION_IMAGE_BOXES.map((image_box, index)=>(
                        <div key={index} className={styles.rmp_image_box}>
                        <Image alt={image_box.alt} src={image_box.image} className={styles.rmp_image}/>
                        <div className={`${styles.rmp_title} dark:text-white`}>{image_box.title}</div>
                    </div>
                    ))
                }
            </div>
        </div>
    </div>
    <Image src={JOIN_RMP_FAMILY_SECTION_BG.pink} alt="" className={styles.homepage_pkgds_pink_bacground}/>
    <Image src={JOIN_RMP_FAMILY_SECTION_BG.blue} alt="" className={styles.homepage_pkgds_blue_bacground}/>

</div>
  )
}

export default JoinRMPFamilySection
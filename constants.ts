import { useTranslations } from 'next-intl';

// site info
export const SITE_NAME = "RateTeach"
export const SITE_BASE_URL = 'https://rateteach.ru.ac.bd' 
export const API_BASE_URL = process.env.NEXT_PUBLIC_HOST || 'https://apirateteach.ru.ac.bd'
export const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || '573678907891-8b1nrjprjdqhjgoqkmnseu81jt033ohe.apps.googleusercontent.com'

// auth buttons texts
export const PROFILE_AUTH_BUTTON_TEXT = 'Profile'
export const SETTINGS_AUTH_BUTTON_TEXT = 'Account Settings'
export const RATINGS_AUTH_BUTTON_TEXT = 'Your Ratings'
export const SAVED_PROFESSOR_AUTH_BUTTON_TEXT = 'Saved professors'
export const LOGOUT_AUTH_BUTTON_TEXT = 'Logout'

// auth buttons links
export const PROFILE_AUTH_LINK = '/account/profile'
export const SETTINGS_AUTH_LINK = '/account/settings'
export const RATINGS_AUTH_LINK = '/account/your-ratings'
export const SAVED_PROFESSOR_AUTH_LINK = '/account/saved-professors'

// guest buttons texts
export const LOGIN_GUEST_BUTTON_TEXT = "Log In"
export const SIGNUP_GUEST_BUTTON_TEXT = "Sign Up"

//  modal names
export const CHECK_EMAIL_MODAL_NAME = 'checkemailModal'
export const PROFESSOR_SIGN_UP_SEARCH_MODAL_NAME = 'professorSignUpSearchModal'
export const PROFESSOR_SIGN_UP_MODAL_NAME = 'professorSignUpModal'
export const NAVIGATION_SMALL_SCREEN_MODAL_NAME = 'navigationSmallScreen'
export const LOGIN_MODAL_NAME = 'loginModal'
export const SIGNUP_MODAL_NAME = ''

// menu names
export const AUTH_MENU_NAME = 'My Account'


// social links
export const TIKTALK_SOCIAL_LINK = 'https://tiktok.com/@rateteach'
export const X_SOCIAL_LINK = 'https://x.com/rateteach'
export const INSTARAM_SOCIAL_LINK = 'https://www.instagram.com/rateteach/'

// background images links
export const BG_HEADER_LINK = '/images/bg.svg'

// search placeholders
export const SEARCH_SCHOOL_PLACEHOLDER = "Your school"
export const SEARCH_PROFESSOR_PLACEHOLDER =  "Professor name"

// change search view buttons texts
export const SCHOOL_CHANGE_SEARCH_VIEW_BUTTON_TEXT = "I'd like to look up a professor by name"
export const PROFESSOR_CHANGE_SEARCH_VIEW_BUTTON_TEXT = "I want to find a professor at a school"


/*================ join rmp family section ================== */

import LADY_WITH_PENCIL_IMAGE from '@/public/images/home_rmp_section/instructional-slide-pencil-lady.svg'
import MYSTRY_LADY_IMAGE from '@/public/images/home_rmp_section/instructional-slide-mystery-lady.svg'
import THUMB_WAR_IMAGE from '@/public/images/home_rmp_section/instructional-slide-thumb-war.svg'
import RMP_PINK_BACKGROUND_IMAGE from '@/public/images/home_rmp_section/pink_background.svg'
import RMP_BLUE_BACKGROUND_IMAGE from '@/public/images/home_rmp_section/blue_background.svg'

export const JOIN_RMP_FAMILY_SECTION_TITLE = 'Join the RMP Family'
export const JOIN_RMP_FAMILY_SECTION_SUBTITLE = "Love RMP? Let's make it official."

export const JOIN_RMP_FAMILY_SECTION_BG ={
    pink: RMP_PINK_BACKGROUND_IMAGE,
    blue: RMP_BLUE_BACKGROUND_IMAGE,
}




export const useTranslatedDataJOIN_RMP_FAMILY_SECTION = () => {
    const t = useTranslations('HomePage.JOIN_RMP_FAMILY_SECTION');
  
    return [
      {
        title: t('MANAGE_AND_EDIT_YOUR_RATINGS'),
        image: LADY_WITH_PENCIL_IMAGE,
        alt: 'Lady with a pencil',
      },
      {
        title: t('YOUR_RATINGS_ARE_ALWAYS_ANONYMOUS'),
        image: MYSTRY_LADY_IMAGE,
        alt: 'Person making an anonymous entry',
      },
      {
        title: t('LIKE_OR_DISLIKE_RATINGS'),
        image: THUMB_WAR_IMAGE,
        alt: 'Thumb War',
      },
    ];
  };


/*============= FOOTER =============== */


export const useFooterTranslatedData = () => {
    const t = useTranslations('FOOTER');

    const FOOTER_LINKS = [
        {
            title: t('FOOTER_LINKS.HELP'),
            link: 'https://help.rateteach.ru.ac.bd/',
        },
        {
            title: t('FOOTER_LINKS.SITE_GUIDELINES'),
            link: '/guidelines',
        },
        {
            title: t('FOOTER_LINKS.TERMS_CONDITIONS'),
            link: '/terms-of-use',
        },
        {
            title: t('FOOTER_LINKS.PRIVACY_POLICY'),
            link: '/privacy',
        },
        {
            title: t('FOOTER_LINKS.COPYRIGHT'),
            link: '/copyright',
        },
        {
            title: t('FOOTER_LINKS.CA_NOTICE'),
            link: '/privacy#sectionp10',
        },
        {
            title: t('FOOTER_LINKS.CA_DO_NOT_SELL_OR_SHARE'),
            link: '/ccpa',
        },
    ]

    
    const FOOTER_COPYRIGHT_TEXT = t('FOOTER_COPYRIGHT_TEXT', {SITE_NAME: `${SITE_NAME}`})
  
    return {
        FOOTER_LINKS,
        FOOTER_COPYRIGHT_TEXT
    }
  };


import InstagramIconWhite from '@/public/icons/white/InstagramIconWhite.svg'
import XIconWhite from '@/public/icons/white/XIconWhite.svg'
import TikTalkIconWhite from '@/public/icons/white/TikTalkIconWhite.svg'

export const FOOTER_SOCIAL_LINKS = [
    {
        icon: InstagramIconWhite,
        link: INSTARAM_SOCIAL_LINK,
        alt: 'instagram icon'
    },
    {
        icon: XIconWhite,
        link: X_SOCIAL_LINK,
        alt: 'x icon white'
    },
    {
        icon: TikTalkIconWhite,
        link: TIKTALK_SOCIAL_LINK,
        alt: 'tiktalk icon white'
    },
]
// export const FOOTER_COPYRIGHT_TEXT = `© 2024 ${SITE_NAME}, LLC. All Rights Reserved`

/* ============================================= API URLS ============================== */
export const SCHOOL_SEARCH_API =   `${API_BASE_URL}/api/search/schools/`
export const PROFESSOR_SEARCH_API =   `${API_BASE_URL}/api/search/professors/`
export const SCHOOL_RATINGS_API =   `${API_BASE_URL}/api/ratings/school-rating/`
export const PROFESSOR_RATINGS_API  = `${API_BASE_URL}/api/ratings/professors/`






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
export const LOGIN_MODAL_NAME = 'loginModal'
export const SIGNUP_MODAL_NAME = ''

// menu names
export const AUTH_MENU_NAME = 'My Account'

// social link
export const TIKTALK_SOCIAL_LINK = 'https://tiktok.com/@ratemyprofessors'
export const X_SOCIAL_LINK = 'https://x.com/ratemyprofessor'
export const INSTARAM_SOCIAL_LINK = 'https://www.instagram.com/ratemyprofessors/'

// background images links
export const BG_HEADER_LINK = '/images/bg.svg'

// search placeholders
export const SEARCH_SCHOOL_PLACEHOLDER = "Your school"
export const SEARCH_PROFESSOR_PLACEHOLDER =  "Professor name"

// change search view buttons texts
export const SCHOOL_CHANGE_SEARCH_VIEW_BUTTON_TEXT = "I'd like to look up a professor by name"
export const PROFESSOR_CHANGE_SEARCH_VIEW_BUTTON_TEXT = "I want to find a professor at a school"

// join rmp family sections

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

export const JOIN_RMP_FAMILY_SECTION_IMAGE_BOXES = [
    {
        title: "Manage and edit your ratings",
        image: LADY_WITH_PENCIL_IMAGE,
        alt: 'Lady with a pencil',
    },
    {
        title: "Your ratings are always anonymous",
        image: MYSTRY_LADY_IMAGE,
        alt: 'Person making an anonymous entry',
    },
    {
        title: "Like or dislike ratings",
        image: THUMB_WAR_IMAGE,
        alt: 'Thumb War',
    },
]
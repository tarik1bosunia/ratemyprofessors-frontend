import  continueWithSocialAuth from  './continue-with-social-auth'

export const continueWithGoogle = () => continueWithSocialAuth('google-auth2', 'google')
export const continueWithFacebook = () => continueWithSocialAuth('facebook', 'facebook')

export function capitalizeFirstLetter(str: string) {
    if (!str) return ''; // Add this check;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export {default as translateNumberToBangla} from './translateNumberToBangla'
export {default as translateEntityName} from './translateEntityName'
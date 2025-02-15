import { useSocialAuthenticateMutation } from "@/redux/fetures/authApiSlice";
import { setAuth } from "@/redux/fetures/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { toast } from "react-toastify";
import useModal from "./use-modal";
import { setEmail } from "@/redux/fetures/modalSlice";



export default function useSocialAuth(){
    const [socialAuth, {isLoading}] = useSocialAuthenticateMutation()
    const dispatch = useAppDispatch()

    const {close: closeCheckEmailModal} =  useModal('checkemailModal')

    const useGoogleAuth = (credential: string) => {
        socialAuth({provider: 'google', credential})
        .unwrap()
        .then((data) => {
          

            // Dispatch setEmail action to store email in Redux state
            dispatch(setEmail(''));

            // close registration modal
            closeCheckEmailModal()
            const {access, refresh} = data.token
            dispatch(setAuth({access, refresh}))
         
            toast.success("Google login successfull!")
           
        })
        .catch(() => {
            toast.error("Google login Failed!")
        })
    }

    return {
        useGoogleAuth,
        isLoading,
    }

}
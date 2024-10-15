'use client'

import styles from '@/components/common/google-auth.module.css'


import { useSocialAuth } from "@/hooks";
import { useEffect } from "react";

export default function GoogleAuth()
{
    const {googleAuth, isLoading} = useSocialAuth()
    // console.log("client id: ", process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID)
    const handleSignInWithGoogle = async(response: any) => {
  
      // console.log('google response: ', response);

      const credential = response.credential as string;

      googleAuth(credential)
  
      // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
      // console.log('Name: ' + profile.getName());
      // console.log('Image URL: ' + profile.getImageUrl());
      // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    };
  
    useEffect(()=>{
     
      window.google.accounts.id.initialize({
        client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
        callback: handleSignInWithGoogle
      })
  
      window.google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large', text:'signup_with', shape: 'circle', width: '280' } // customization attributes
      );
  
        // Apply custom styles to the rendered button
        const googleButton = document.getElementById('googleSignInButton');
        if (googleButton) {
          googleButton.classList.add(styles.googleAuthButton);
        }
  
      window.google.accounts.id.prompt(); // also display the One Tap dialog
      
    }, []) // eslint-disable-line react-hooks/exhaustive-deps
    return (  <div id="googleSignInButton"/>)
}
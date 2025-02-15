import { Metadata } from "next"

import { ResetPasswordConfirmForm } from '@/components/forms'

export const metadata: Metadata = {
    title: "rateteach | password reset confirm",
    description: "rateteach password reset confirm page"
}

interface Props{
  params: {
    uid: string;
    token: string;
  };
}
export default function Page({params: {uid, token}}: Props){
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Reset your password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <ResetPasswordConfirmForm uid={uid} token={token} />
        </div>
      </div>
    )
}
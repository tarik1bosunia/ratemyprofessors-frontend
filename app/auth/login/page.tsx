import Link from "next/link";
import { LoginForm } from "@/components/forms";
import Image from "next/image";

import type { Metadata } from "next";
import { SocialButtons } from "@/components/common";

export const metadata: Metadata = {
  title: "rateteach | login",
  description: "rateteach login page"
}

export default function Page(){


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          

          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Log in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">

          <LoginForm />
          <SocialButtons />
          <p className="mt-10 text-center text-sm text-gray-500">
            Don&apos;t have an account?{' '}
            <Link href="/auth/registration" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign Up
            </Link> here
          </p>
        </div>
      </div>
    )
}
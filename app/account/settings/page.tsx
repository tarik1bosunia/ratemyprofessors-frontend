import { UserPagesIndex } from '@/components/account';


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "rateteach | account",
  description: "rateteach account page",
};

export default function Page(){
  return <UserPagesIndex initialActiveTab="/account/settings" />;
};

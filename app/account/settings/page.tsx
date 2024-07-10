import { UserPagesIndex } from '@/components/account';


import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "ratemyprofessors | account",
  description: "rate my professors account page",
};

export default function Page(){
  return <UserPagesIndex initialActiveTab="/account/settings" />;
};

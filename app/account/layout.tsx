import { Navbar } from "@/components/common";


export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Navbar />
      <div className="my-0 mx-auto max-w-[1280px] w-full min-h-[calc(-240px + 100vh)]" >
        {children}
      </div>
    </>
 
  )
}

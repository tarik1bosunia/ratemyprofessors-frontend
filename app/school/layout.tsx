import { Navbar } from "@/components/common";

export default function SchoolLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>){
    return (
        <>
            <Navbar />
            {children}
        </>
    )

}
import { Navbar } from "@/components/common";

export default function RatingsLayout({
  children,
  ratings,
}: {
  children: React.ReactNode;
  ratings: React.ReactNode;
}) {
  return (
    <> <Navbar />
    <div className="my-0 py-1 mx-auto w-full lg:max-w-[1280px] min-h-[calc(-240px+100vh)] overflow-hidden">
        {children}
        {ratings}
    </div>
    </>
  );
}

export default function RatingsLayout({
  children,
  ratings,
}: {
  children: React.ReactNode;
  ratings: React.ReactNode;
}) {
  return (
    <div className="my-0 mx-auto w-full lg:max-w-[1280px] min-h-[calc(-240px+100vh)] overflow-hidden">
        {children}
        {ratings}
    </div>
  );
}

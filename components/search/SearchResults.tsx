import Link from "next/link";

type SearchResultsProps<T> = {
  query: string;
  useSearchQuery: (query: string) => { data?: T[]; error?: any; isLoading: boolean };
  entityName: string;
  renderItem: (item: T) => React.ReactNode;
  noResultsMessage: React.ReactNode;
};

export default function SearchResults<T>({
  query,
  useSearchQuery,
  entityName,
  renderItem,
  noResultsMessage,
}: SearchResultsProps<T>) {
  const { data, error, isLoading } = useSearchQuery(query);

  if (isLoading) return <div>Loading {entityName}...</div>;
  if (error) return <div>Error loading {entityName}!</div>;

  if (data?.length === 0) {
    return <div>{noResultsMessage}</div>;
  }
  console.log("data: ", data)

  return (
    <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
      <div className="ml-10 mb-12 max-w-[860px]">
        <div className="">
          <div className="text-base text-left mb-4 mt-8 w-fit">
            <h1 className="mb-8 text-xl">
              <strong>{data?.length}</strong>
              &nbsp; {entityName} with &nbsp;
              <strong>{query}</strong>
              &nbsp; in their name
            </h1>
          </div>
        </div>
        <div>
          {data?.map((item: T) => (
            <Link
              href={`/school/${(item as any).id}`}
              key={(item as any).id}
              className="mb-6 flex items-center bg-gray-200 px-6 py-3 relative no-underline w-full"
            >
              {renderItem(item)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

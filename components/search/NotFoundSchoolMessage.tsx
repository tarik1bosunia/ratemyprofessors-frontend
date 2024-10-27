interface Props{
    query: string
}

export default function NotFoundShoolMessage({query}: Props){
    return (
        <div className="my-0 mx-auto max-w-[1280px] min-h-screen w-full">
          <div className="mt-16 max-w-[780px] min-h-screen text-left w-full">
            <div className="text-xl mb-8">
              No school with
              <strong className="font-bold"> {query}</strong>
              &nbsp;in its name.
            </div>
            <div className="text-base mb-10">
              Use the search bar above and check the spelling or try an alternate spelling.
            </div>
            <div className="flex flex-col items-center justify-between bg-gray-200 text-base p-7 w-full">
              <div className="text-base">
                Don&apos;t see the school you&apos;re looking for?
              </div>
              <a
                href="/add/school"
                className="bg-black border border-blue-700 rounded-full text-white flex justify-center items-center font-bold transition transform hover:scale-105 h-9 leading-5 mt-4 px-6"
              >
                Add a School
              </a>
            </div>
          </div>
        </div>
    )
}
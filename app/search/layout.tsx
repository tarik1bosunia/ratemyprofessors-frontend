import { Navbar } from "@/components/common"
import { SearchType } from "@/types"

interface Props{
    children: React.ReactNode,
}

const layout = ({children}: Props) => {
  return (
    <>
    <Navbar/>
    { children }
    </>
  )
}

export default layout
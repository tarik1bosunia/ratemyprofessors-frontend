import { Navbar } from "@/components/common"

interface Props{
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <>
    <Navbar />
    { children }
    </>
  )
}

export default layout
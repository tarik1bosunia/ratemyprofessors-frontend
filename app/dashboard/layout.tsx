import { RequireAuth } from '@/components/utils'

import React from 'react'

interface Props{
    children: React.ReactNode
}

const layout = ({children}: Props) => {
  return (
    <RequireAuth> { children }</RequireAuth>
  )
}

export default layout
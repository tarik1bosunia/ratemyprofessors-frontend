'use client'
import { store } from "./store"
import { Provider as ReduxProvider } from "react-redux"

interface Props{
    children: React.ReactNode
}

export default function Provider({children}: Props){
    return (
        <ReduxProvider store={store}>
        {children}
        </ReduxProvider>
    )
}

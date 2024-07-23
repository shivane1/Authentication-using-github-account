"use client"
import { SessionProvider } from "next-auth/react"
const Sessionwrap= ({children}) => {
  return(
    <SessionProvider>{children}</SessionProvider>
  )
}

export default Sessionwrap
import { Header } from '@/components/kbpate/Header'
import React from 'react'

export default function RootLayout({ children }) {
  return (
   <>
        <Header />
        <main>{children}</main>

    </>
  )
}
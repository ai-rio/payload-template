import React from 'react'
import './styles.css'
import Header from './components/Header'

export const metadata = {
  description: "Creator's Deal Hub - The Living Business Constellation",
  title: "Creator's Deal Hub",
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#111111] text-[#f3f3f4] font-['Inter'] overflow-x-hidden">
        <Header />
        <main className="pt-[88px]">{children}</main>
      </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/app/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SkyBooks',
  description: 'Find your books here',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body  suppressHydrationWarning={true} className={inter.className}>
        <Navbar/>
        
        {children}
        </body>
    </html>
  )
}

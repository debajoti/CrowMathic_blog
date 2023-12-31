import { Header } from '../components'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import { getCategories } from '../services'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CrowMathic',
  description: 'Generated by create next app',
}

export default async function RootLayout({ children }) {
  const categories = await getCategories() || [];
  return (
    <html lang='en'>
    
      <body className={inter.className}>
        <Header categories={categories} />
        {children}
      </body>
    </html>
  )
}

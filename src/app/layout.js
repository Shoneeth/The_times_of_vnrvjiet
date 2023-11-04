import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './redux/providers'


const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: {
    default:'THE TIMES OF VNRVJIET',
    template:`%s | THE TIMES OF VNRVJIET`,
  },
  description: 'THE TIMES OF VNRVJIET is the site of Diurnalis a Student-led,Faculty-advised and Management-monitored Student Publication Community in the Campus of VNRVJIET.',
  keywords: ['nextjs', 'react', 'javascript','VNRVJIET','Diurnalis','THE TIMES OF VNRVJIET','journalism','hyderabad','club','news','articles'],
  author:'diurnalis-Tech Team',
  alternates: {
    canonical: 'https://diurnalis.in',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} scrollbar-none`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}

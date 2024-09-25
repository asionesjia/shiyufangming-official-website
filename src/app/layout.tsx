import Navbar from '@/components/Navbar'
import '@/styles/globals.css'

import Providers from '@/components/Providers'
import { cn } from '@/lib/utils'
import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='zh-cn'
      className={cn('bg-white text-slate-900 antialiased')}>
      <body className='min-h-screen bg-slate-50 antialiased'>
        <Providers>
          {/* @ts-expect-error Server Component */}
          <Navbar />
          <main>{children}</main>
          <Footer/>
        </Providers>

        {/* Allow more height for mobile menu on mobile */}
        <div className='h-40 md:hidden' />
      </body>
    </html>
  )
}

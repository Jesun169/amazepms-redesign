import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import SmoothScroll from '@/components/common/SmoothScroll'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata = {
  title: {
    default: 'AmazePMS - Premium Project Management Software',
    template: '%s | AmazePMS',
  },
  description: 'Transform your project management with AmazePMS. The most intuitive and powerful project management software for modern teams.',
  keywords: 'project management, team collaboration, task tracking, agile, scrum',
  authors: [{ name: 'AmazePMS Team' }],
  openGraph: {
    title: 'AmazePMS - Premium Project Management Software',
    description: 'Transform your project management with AmazePMS',
    url: 'https://amazepms.com',
    siteName: 'AmazePMS',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AmazePMS',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AmazePMS - Premium Project Management Software',
    description: 'Transform your project management with AmazePMS',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased bg-dark-100 text-white overflow-x-hidden">
        <Providers>
          <SmoothScroll>
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  )
}
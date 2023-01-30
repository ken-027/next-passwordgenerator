import Footer from '@/components/layout/Footer'
import Nav from '@/components/layout/Nav'
import '@/sass/config/_index.scss'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}

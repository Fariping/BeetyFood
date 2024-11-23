import './globals.css'

export const metadata = {
  title: 'BEETYFOOD',
  description: 'وجبات يوم السبت',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

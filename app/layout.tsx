import './globals.css'
import type { Metadata } from 'next'
import { AppProvider } from './utils/providers/AppProvider'

export const metadata: Metadata = {
  title: 'Armageddon',
  description: 'Upcoming asteroid arrivals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppProvider>
      <html lang="ru">
        <body>{children}</body>
      </html>
    </AppProvider>
  )
}

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dev Home',
  description: 'a open website for developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}

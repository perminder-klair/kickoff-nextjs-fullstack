import { Suspense } from 'react';
import { Inter } from 'next/font/google'
import Loading from './loading';
import StyledComponentsRegistry from '../lib/registry';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <main>
          <StyledComponentsRegistry>
            <Suspense fallback={<Loading/>}>
            {children}
            </Suspense>
          </StyledComponentsRegistry>
        </main>
      </body>
    </html>
  )
}

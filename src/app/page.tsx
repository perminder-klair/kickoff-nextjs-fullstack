// import { Inter } from 'next/font/google';
// const inter = Inter({ subsets: ['latin'] })
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function Home() {
  return (
    <main>
      <div>
        <p className="text-3xl font-bold underline">
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
      </div>
    </main>
  )
}

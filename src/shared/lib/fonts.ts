import localFont from 'next/font/local'
import { Unbounded } from 'next/font/google'

export const roboto = localFont({
  src: [
    {
      path: '../assets/fonts/Roboto-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Roboto-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
})

export const displayFont = Unbounded({
  subsets: ['latin', 'cyrillic'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-display',
})

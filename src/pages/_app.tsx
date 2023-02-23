import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Lato } from '@next/font/google'


const lato = Lato({
  weight: ['400',  '900'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-lato',
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${lato.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  )
}

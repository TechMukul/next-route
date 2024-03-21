import type { AppProps } from 'next/app'
import '@/styles/globals.css'
 import Nav from '../pages/Components/Nav/Nav'
 import Footer from '../pages/Components/Footer/Footer'
export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
  <Nav/>
  <Component {...pageProps} />
  <Footer/>
  </>
  )
}
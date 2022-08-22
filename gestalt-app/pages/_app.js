// import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import { tailwind } from '@material-tailwind/react'
import Head from 'next/head'
import { SessionProvider } from "next-auth/react"
// import '@material-tailwind/react/tailwind.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <Head>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </SessionProvider>
    </>
  )
}

export default MyApp

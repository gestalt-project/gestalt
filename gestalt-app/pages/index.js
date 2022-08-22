// import Head from 'next/head'
import Header from '../components/Header'
import Head from 'next/head'
import { IconButton } from "@material-tailwind/react"
import Image from 'next/image'
import { getSession, useSession } from 'next-auth/react'
import Login from '../components/Login'

export default function Home() {

  const {session} = useSession()
  if(!session) return <Login />

  return (
    <div>
      <Head>
        <title>Gestalt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <section className="bg-[#F8F9FA] pb-10 px-10">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between py-6">
            <h2 className="text-gray-700 text-lg">Create a new story</h2>

            <IconButton
                variant="text"
                ripple={true}
                color="gray"
                >
                <i className="material-icons">add</i>
            </IconButton>

          </div>

          <div className="relative object-cover h-44 w-40 cursor-pointe hover:border-2 border-blue-700">
            <Image 
            src="https://static.vecteezy.com/system/resources/previews/006/563/742/original/create-new-file-document-concept-illustration-flat-design-eps10-modern-graphic-element-for-landing-page-empty-state-ui-infographic-icon-vector.jpg"
            // src="https://www.pngitem.com/pimgs/m/226-2261391_world-icon-png-grey-transparent-png.png"
            // src="https://upload.wikimedia.org/wikipedia/commons/7/74/Globe_icon_2014-06-26_22-09.png"
            layout="fill" />
          </div>

        </div>
      </section>

      <section className="bg-white px-10">
        <div className="max-w-3xl mx-auto py-8 text-sm text-gray-700">
          <div className="flex items-center justify-between pb-5">
            <h2 className="font-medium flex-grow">Your stories</h2>
            <p className="mr-12">Date Created</p>
          </div>
        </div>
      </section>

    </div>
  )
}
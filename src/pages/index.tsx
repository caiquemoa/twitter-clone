import Head from 'next/head'
import { SignInBanner } from '../components/SignInBanner/SignInBanner'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <SignInBanner />
    </>
  )
}

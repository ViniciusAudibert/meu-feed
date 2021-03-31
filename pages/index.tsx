import Head from 'next/head'
import PaperBase from '../src/paperbase'

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu Feed - Seu mural de feedbacks</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
      </Head>

      <PaperBase />
    </>
  )
}

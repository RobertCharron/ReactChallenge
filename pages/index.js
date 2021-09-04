import Head from 'next/head'
import TagsContainer from '../components/TagsContainer'
import { TagsProvider } from '../context/TagsContext'

export default function Home() {
  return (
    <div className="bg-gray-300 p-5 h-screen text-center">
      <Head>
        <title>React Challenge</title>
        <meta name="description" content="Carter gon get fukt" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TagsProvider>
        <TagsContainer />
      </TagsProvider>
    </div>
  )
}

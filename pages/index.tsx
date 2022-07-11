import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Nav } from '../components/Nav'
import Login from '../components/Login'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vana</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav description="Home page: login / module options / modules index" />
      <Login />
    </div>
  )
}

export default Home

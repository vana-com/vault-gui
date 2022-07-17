import type { NextPage } from "next";
import Head from "next/head";

import { Nav } from "../components/Nav";
import styles from "../styles/Home.module.css";

const HomePage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Vana</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Nav description="Home page: login / module options / modules index" />
  </div>
);

export default HomePage;

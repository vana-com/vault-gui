import type { NextPage } from "next";
import Head from "next/head";

import Login from "../components/Login";
import styles from "../styles/Home.module.css";

const LoginPage: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Vana</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Login />
  </div>
);

export default LoginPage;

import type { NextPage } from "next";
import Head from "next/head";

import Login from "../components/Login";

const LoginPage: NextPage = () => (
  <div>
    <Head>
      <title>Vana</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Login />
  </div>
);

export default LoginPage;

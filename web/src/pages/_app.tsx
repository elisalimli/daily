/* eslint-disable import/no-extraneous-dependencies */
// import "tailwindcss/tailwind.css";
import Head from "next/head";
import Modal from "react-modal";

import "../styles/globals.css";
import { createPageProgressBar } from "../utils/createPageProgressBar";

Modal.setAppElement("#__next");

function MyApp({ Component, pageProps }) {
  createPageProgressBar();

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,user-scalable=no,user-scalable=0"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

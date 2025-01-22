import "../app/globals.css";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Colin Lupe</title>
        <link rel="icon" href="/favicon.png" />
        <meta
          name="description"
          content="Colin Lupe is a director, DP, cinematographer, and editor based in Los Angeles."
        />
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1.0, minimum-scale=1.0, interactive-widget=resizes-content"
        />
        <link rel="stylesheet" href="https://use.typekit.net/oev0dtt.css" />
        <meta property="og:title" content="COLIN LUPE" key="ogtitle" />
        <meta
        property="og:description"
        content="Director | DP | Cinematographer | Editor"
        key="ogdesc"
        />
        <meta property="og:image" content="" />
      </Head>{" "}
      <Header />
          <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

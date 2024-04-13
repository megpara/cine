import "../app/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Colin Lupe</title>
        <meta
          name="description"
          content="Colin Lupe is a director, DP, cinematographer, and editor based in Los Angeles."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
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
          <Component {...pageProps} />
    </>
  );
}

export default MyApp;

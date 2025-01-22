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
        <link rel="preload" href="/stills/creator.png" as="image" />
        <link rel="preload" href="/stills/lizzo.png" as="image" />
        <link rel="preload" href="/stills/overhead1.png" as="image" />
        <link rel="preload" href="/stills/overhead2.png" as="image" />
        <link rel="preload" href="/stills/overhead3.png" as="image" />
        <link rel="preload" href="/stills/tds1.png" as="image" />
        <link rel="preload" href="/stills/tds2.png" as="image" />
        <link rel="preload" href="/stills/tds3.png" as="image" />
        <link rel="preload" href="/stills/wiz1.png" as="image" />
        <link rel="preload" href="/stills/wiz2.png" as="image" />
        <link rel="preload" href="/stills/Monitor-hevc-safari.mp4" as="video" />
        <link rel="preload" href="/stills/TV-1-hevc-safari.mp4" as="video" />
        <link rel="preload" href="/creator_banner.mp4" as="video" />
        <link rel="preload" href="/creator_reel.mp4" as="video" />
        <link rel="preload" href="/creator_still.mp4" as="video" />
        <link rel="preload" href="/editor_banner.mp4" as="video" />
        <link rel="preload" href="/editing_reel.mp4" as="video" />
        <link rel="preload" href="/editing_still.mp4" as="video" />
        <link rel="preload" href="/directing_reel.mp4" as="video" />
        <link rel="preload" href="/directing_still.mp4" as="video" />
        <link rel="preload" href="/director_banner.mp4" as="video" />
        <link rel="preload" href="/cine_banner.mp4" as="video" />
        <link rel="preload" href="/cine_reel.mp4" as="video" />
        <link rel="preload" href="/cine_still.mp4" as="video" />
      </Head>{" "}
      <Header />
          <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;

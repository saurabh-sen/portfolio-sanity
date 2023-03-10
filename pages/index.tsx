import Head from "next/head";
import Start from "../src_components/Start/Start.jsx";

export default function Home() {
  return (
    <div className="Home">
      <Head>
        <title>Saurabh Sen</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/profile1.png" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        

      </Head>

      <main className="main">
        <Start />
      </main>
    </div>
  );
}

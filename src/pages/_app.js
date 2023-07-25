import "@/styles/globals.css";
import Head from "next/head";

export const metadata = {
  title: "CHAT-GPT",
  description: "Pergunte o que quizer para a inteligência artificial",
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <link rel="icon" href="/favicon.png" type="image/x-icon" />
      </Head>
      <div className="bg-[#171717]">
        <Component {...pageProps} />
      </div>
    </>
  );
}

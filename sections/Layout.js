import Head from "next/head";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Nav from "./Nav";

export function Layout({ children }) {
  const getPages = useSelector((state) => state.pages.prime);
  return (
    <>
      <Head>
        <title>Marine Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-poppins">
        {getPages !== "home" && <Nav />}

        <div className="min-h-screen mx-auto flex flex-col">
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}

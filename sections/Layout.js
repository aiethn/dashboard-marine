import Head from "next/head";
import Footer from "./Footer";
import Nav from "./Nav";

export function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Marine Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="font-poppins">
        <Nav />
        <div className="min-h-screen mx-auto flex flex-col pt-10">
          <main className="flex-grow container mx-auto sm:px-6">
            {children}
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

import React, { ReactNode } from "react";
import Head from "next/head";
import Navbar from "../navbar/Navbar"

type Props = {
  children?: ReactNode;
};

const Layout = ({ children }: Props) => (
  <div>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
        rel="stylesheet"
      ></link>
    </Head>
    <header>
      <nav>
        <Navbar />
      </nav>
    </header>
    <div className="container px-4 mx-auto pb-4">
    {children}
    </div>
  </div>
);

export default Layout;
